pipeline {
    agent any
    stages {
        stage('Clone repository') {
            steps {
                git 'https://github.com/College-Placement-Portal-NITH/placement-portal-frontend.git'
            }
        }
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