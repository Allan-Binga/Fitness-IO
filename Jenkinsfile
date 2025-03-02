pipeline {
    agent any
    tools {
        nodejs 'nodejs 23'
    }

    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'master', url: 'https://github.com/Allan-Binga/Fitness-IO'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
    }
}
