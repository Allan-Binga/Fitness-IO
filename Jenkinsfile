/* groovylint-disable-next-line CompileStatic */
pipeline {
    agent any
    tools {
        nodejs 'nodejs 23'
    }
    environment {
        NETLIFY_TOKEN = credentials('NETLIFY_TOKEN')
        SITE_ID = credentials('SITE_ID')
    }

    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'master', url: 'https://github.com/Allan-Binga/Fitness-IO'
                sh 'cd Fitness-IO'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Deploy to Netlify') {
            steps {
                sh 'netlify deploy --prod --dir=build'
            }
        }
    }
}