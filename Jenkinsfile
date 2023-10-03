pipeline {
    agent any

    environment {
      PROJECT = 'sul-dlss/folio-graphql'
      GIT_URL = 'https://github.com/sul-dlss/folio-graphql.git'
    }

    triggers {
        // the generic-webhook-trigger plugin is installed on the Jenkins server
        GenericTrigger(
            genericVariables: [
                [$class: 'GenericVariable', key: 'image', value: '$.repository.repo_name', defaultValue: ''],
                [$class: 'GenericVariable', key: 'pusher', value: '$.push_data.pusher', defaultValue: ''],
                [$class: 'GenericVariable', key: 'tag', value: '$.push_data.tag', defaultValue: ''],
            ],
            causeString: 'Docker Hub push event for ${image}:${tag} by ${pusher}',
            printContributedVariables: true,
            // The presence of the token in the webhook push is what triggers this specific build.
            // Dockerhub will send a POST request with this token via our brick-city gateway
            // See https://hub.docker.com/repository/docker/suldlss/folio-graphql/webhooks (logged in)
            token: 'foliogql'
        )
    }

    stages {
        stage('Deploy to test server') {
            environment {
              DEPLOY_ENVIRONMENT = 'folio-test'
            }
            when {
              // Only run on builds trigggered by GenericWebhookTrigger 
              // Also check the docker image tag name, based on a push to the main branch in Github
               expression { currentBuild.getBuildCauses('org.jenkinsci.plugins.gwt.GenericCause') && tag == 'main' }
             }
            steps {
              echo 'Deploying to test server'
              
              sshagent (['sul-devops-team', 'sul-continuous-deployment']){
                sh """#!/bin/bash -l
                  ssh graphql@sul-folio-graphql-test.stanford.edu \
                  'docker pull suldlss/folio-graphql:main && \
                  docker rm -f \$(docker ps -a -q --filter="name=folio-graphql") && \
                  docker run -d --env-file ./.env -p 4000:4000 --name folio-graphql suldlss/folio-graphql:main'
                """
              }
            }
            post {
              always {
                  build job: '/Continuous Deployment/Slack Deployment Notification', parameters: [
                  string(name: 'PROJECT', value: env.PROJECT),
                  string(name: 'TAG_NAME', value: tag),
                  string(name: 'DEPLOY_ENVIRONMENT', value: env.DEPLOY_ENVIRONMENT),
                  string(name: 'GIT_URL', value: env.GIT_URL),
                  booleanParam(name: 'SUCCESS', value: currentBuild.resultIsBetterOrEqualTo('SUCCESS')),
                  string(name: 'RUN_DISPLAY_URL', value: env.RUN_DISPLAY_URL)
                ]
              }
            }
        }
        stage('Deploy to production server') {
           environment {
              DEPLOY_ENVIRONMENT = 'folio-prod'
            }
            when {
              // Only run on builds trigggered by GenericWebhookTrigger
              // Also check the docker image tag name, based on a tagged release in Github
              expression { currentBuild.getBuildCauses('org.jenkinsci.plugins.gwt.GenericCause') && tag.startsWith('v') }
            }
            steps {
              echo 'Deploying to production server'

              sshagent (['sul-devops-team', 'sul-continuous-deployment']){
                sh """#!/bin/bash -l
                  ssh graphql@sul-folio-graphql-prod.stanford.edu \
                  'docker pull suldlss/folio-graphql:${tag} && \
                  docker rm -f \$(docker ps -a -q --filter="name=folio-graphql") && \
                  docker run -d --env-file ./.env -p 4000:4000 --name folio-graphql suldlss/folio-graphql:${tag}'
                """
              }
            } 
            post {
              always {
                  build job: '/Continuous Deployment/Slack Deployment Notification', parameters: [
                  string(name: 'PROJECT', value: env.PROJECT),
                  string(name: 'TAG_NAME', value: tag),
                  string(name: 'DEPLOY_ENVIRONMENT', value: env.DEPLOY_ENVIRONMENT),
                  string(name: 'GIT_URL', value: env.GIT_URL),
                  booleanParam(name: 'SUCCESS', value: currentBuild.resultIsBetterOrEqualTo('SUCCESS')),
                  string(name: 'RUN_DISPLAY_URL', value: env.RUN_DISPLAY_URL)
                ]
              }
            }
        }
    }
}
