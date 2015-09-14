FROM daocloud.io/library/centos:6.6
COPY ./config.js /tmp/config.js
ENV NODE_ENV production
RUN \
	yum update \
	&& yum install wget \
	&& curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.26.1/install.sh | bash \
	&& mkdir ~/ghost-zh \
	&& cd ~/ghost-zh \
	&& wget http://dl.ghostchina.com/Ghost-0.7.0-zh-full.zip \
	&& unzip Ghost-0.7.0-zh-full.zip -d ~/ghost-zh \
	&& rm -f Ghost-0.7.0-zh-full.zip \
	&& nvm install v0.12.7 \
	&& nvm use v0.12.7 \
	&& mv /tmp/config.js ~/ghost-zh \
CMD node ~/ghost-zh/index.js
VOLUME ["~/ghost-zh"]
EXPOSE 80