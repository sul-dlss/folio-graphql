pipeline {
    agent any

    environment {
      PROJECT = 'sul-dlss/folio-graphql'
      GIT_URL = 'https://github.com/sul-dlss/folio-graphql.git'
    }

    parameters {
      string(name: 'image', defaultValue: 'sul-dlss/folio-graphql', description: 'Docker image to deploy')
      string(name: 'imageTag', defaultValue: '', description: 'Docker image tag to deploy')
    }

    stages {
        stage('Echo Before Stages') {
            steps {
                echo "git branch: ${env.GIT_BRANCH}"
                echo "tag name: ${env.TAG_NAME}"
            }
        }
        stage('Deploy to test server') {
            environment {
              DEPLOY_ENVIRONMENT = 'folio-test'
            }
            when {
               expression { params.image == 'sul-dlss/folio-graphql' && params.imageTag == 'main' }
             }
            steps {
              echo 'Deploying to test server'
              
              sshagent (['sul-devops-team', 'sul-continuous-deployment']){
                sh """#!/bin/bash -l
                  ssh graphql@sul-folio-graphql-test.stanford.edu \
                  'docker pull ghcr.io/sul-dlss/folio-graphql:main && \
                  docker rm -f \$(docker ps -a -q --filter="name=folio-graphql") && \
                  docker run -d --env-file ./.env -p 4000:4000 --dns=10.111.7.160 --dns=8.8.8.8 --name folio-graphql ghcr.io/sul-dlss/folio-graphql:main'
                """
              }
            }
            post {
              always {
                  build job: '/Continuous Deployment/Slack Deployment Notification', parameters: [
                  string(name: 'PROJECT', value: env.PROJECT),
                  string(name: 'DEPLOY_ENVIRONMENT', value: env.DEPLOY_ENVIRONMENT),
                  string(name: 'TAG_NAME', value: imageTag),
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
               expression { params.image == 'sul-dlss/folio-graphql' && params.imageTag == 'latest' }
            }
            steps {
              echo 'Deploying to production server'

              sshagent (['sul-devops-team', 'sul-continuous-deployment']){
                sh """#!/bin/bash -l
                  ssh graphql@sul-folio-graphql-prod.stanford.edu \
                  'docker pull ghcr.io/sul-dlss/folio-graphql:latest && \
                  docker rm -f \$(docker ps -a -q --filter="name=folio-graphql") && \
                  docker run -d --env-file ./.env -p 4000:4000 --dns=10.111.7.182 --dns=8.8.8.8 --name folio-graphql ghcr.io/sul-dlss/folio-graphql:latest'
                """
              }
            } 
            post {
              always {
                  build job: '/Continuous Deployment/Slack Deployment Notification', parameters: [
                  string(name: 'PROJECT', value: env.PROJECT),
                  string(name: 'TAG_NAME', value: imageTag),
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
