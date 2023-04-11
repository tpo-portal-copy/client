pipeline {
    agent any
    stages {
        stage('Install dependencies') {
            steps {
                sh 'yarn install'
            }
        }
        stage('Build application') {
            steps {
                sh 'yarn build'
            }
        }
    }
}