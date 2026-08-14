pipeline {
    agent any

    environment {
        NVM_DIR = '/var/lib/jenkins/.nvm'
        NODE_VERSION = '24.19.0'
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Node Version') {
            steps {
                sh '''
                    set -e

                    export NVM_DIR="$NVM_DIR"
                    . "$NVM_DIR/nvm.sh"

                    nvm use "$NODE_VERSION"

                    echo "Node: $(node -v)"
                    echo "NPM:  $(npm -v)"
                '''
            }
        }

        stage('Install Dependencies') {
            steps {
                sh '''
                    set -e

                    export NVM_DIR="$NVM_DIR"
                    . "$NVM_DIR/nvm.sh"

                    nvm use "$NODE_VERSION"

                    npm ci
                '''
            }
        }

        stage('Build Next.js') {
            steps {
                sh '''
                    set -e

                    export NVM_DIR="$NVM_DIR"
                    . "$NVM_DIR/nvm.sh"

                    nvm use "$NODE_VERSION"

                    npm run build
                '''
            }
        }
    }

    post {
        success {
            echo 'Next.js build completed successfully.'
        }

        failure {
            echo 'Next.js build failed.'
        }
    }
}
