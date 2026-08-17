pipeline {
    agent any

    environment {
        NVM_DIR = '/var/lib/jenkins/.nvm'
        NODE_VERSION = '24.19.0'
        DEPLOY_DIR = '/home/zsphere/www/zsphere/zsphere-frontend'
    }

    stages {

        stage('Node Version') {
            steps {
                sh '''
                    set -e

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

                    echo "Deploying to $DEPLOY_DIR"

                    rsync -a --delete \
                        --exclude='.git' \
                        --exclude='node_modules' \
                        "$WORKSPACE/" "$DEPLOY_DIR/"

                    sudo chown -R zsphere:zsphere "$DEPLOY_DIR"

                    sudo -u zsphere /home/zsphere/deploy-frontend.sh
                '''
            }
        }
    }

    post {
        success {
            echo 'Next.js deployment completed successfully.'
        }

        failure {
            echo 'Next.js deployment failed.'
        }
    }
}
