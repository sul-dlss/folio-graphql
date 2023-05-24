pipeline {
  agent any

  environment {
    PROJECT = 'sul-dlss/folio-graphql'
  }

  stages {
    stage('FOLIO-test deploy') {
      environment {
        DEPLOY_ENVIRONMENT = 'folio-test'
      }

      when {
        branch 'main'
      }

      steps {
        checkout scm

        sshagent (['sul-devops-team', 'sul-continuous-deployment']){
          sh '''#!/bin/bash -l
            # wait for the image to become available?
            sleep 300

            ssh graphql@sul-folio-graphql-test.stanford.edu \
            'docker pull suldlss/folio-graphql:latest && \
            docker rm $(docker stop $(docker ps -a -q --filter="name=folio-graphql")) && \
            docker run -d --env-file ./.env -p 4000:4000 --name folio-graphql suldlss/folio-graphql:latest'
          '''
        }
      }

      post {
        always {
          build job: '/Continuous Deployment/Slack Deployment Notification', parameters: [
            string(name: 'PROJECT', value: env.PROJECT),
            string(name: 'GIT_COMMIT', value: env.GIT_COMMIT),
            string(name: 'GIT_URL', value: env.GIT_URL),
            string(name: 'GIT_PREVIOUS_SUCCESSFUL_COMMIT', value: env.GIT_PREVIOUS_SUCCESSFUL_COMMIT),
            string(name: 'DEPLOY_ENVIRONMENT', value: env.DEPLOY_ENVIRONMENT),
            string(name: 'TAG_NAME', value: env.TAG_NAME),
            booleanParam(name: 'SUCCESS', value: currentBuild.resultIsBetterOrEqualTo('SUCCESS')),
            string(name: 'RUN_DISPLAY_URL', value: env.RUN_DISPLAY_URL)
          ]
        }
      }
    }
  }
}
