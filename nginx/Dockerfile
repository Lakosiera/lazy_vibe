FROM nginx:alpine

COPY ./conf.d /etc/nginx/conf.d

ENTRYPOINT [ "/docker-entrypoint.sh" ]

CMD [ "nginx", "-g", "daemon off;" ]