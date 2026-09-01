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
                    echo "NPM: $(npm -v)"
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

                    npm ci --legacy-peer-deps
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

        stage('Deploy') {
            steps {
                sh '''
                    set -e

                    sudo -u zsphere /home/zsphere/deploy-frontend.sh

                    pm2 restart zsphere-frontend
                '''
            }
        }
    }

    post {
        success {
            echo 'STAGING Next.js build and deployment completed successfully.'
        }

        failure {
            echo 'Next.js build or deployment failed.'
        }
    }
}
