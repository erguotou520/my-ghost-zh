FROM daocloud.io/library/centos:6.6
COPY ./config.js /tmp/config.js
COPY ./start.sh /tmp/start.sh
ENV NODE_ENV production
RUN \
	yum update -y \
	&& yum install wget unzip tar -y \
	&& curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.26.1/install.sh | bash \
	&& mkdir ~/ghost-zh \
	&& cd ~/ghost-zh \
	&& wget http://dl.ghostchina.com/Ghost-0.7.0-zh-full.zip \
	&& unzip -q Ghost-0.7.0-zh-full.zip -d ~/ghost-zh \
	&& rm -f Ghost-0.7.0-zh-full.zip \
	&& . ~/.nvm/nvm.sh \
	&& nvm install v0.12.7 \
	&& mv /tmp/config.js ~/ghost-zh/config.js \
	&& chmod 775 /tmp/start.sh
CMD bash /tmp/start.sh
VOLUME ["~/ghost-zh"]
EXPOSE 80
