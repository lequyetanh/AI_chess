# stage 1

#tải docker image node phiên bản mới nhất
FROM node:latest as node
#xác định thư mục làm việc trên docker image
WORKDIR /app
#copy tất cả folder ngang hàng với dockerfile
COPY . .
#chạy câu lệnh npm install
# RUN npm cache clean
RUN npm install
#chạy câu lệnh npm run build --prod
RUN npm run build --prod

# stage 2
FROM nginx:alpine
COPY --from=node /app/dist/xemphimplus_docker /usr/share/nginx/html
