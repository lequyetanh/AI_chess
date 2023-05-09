# stage 1

#tải docker image node phiên bản mới nhất
FROM node:16.15.1 as node
#xác định thư mục làm việc trên docker image
WORKDIR /app
#copy tất cả folder ngang hàng với dockerfile
COPY . .
#chạy câu lệnh npm install
# RUN npm cache clean
RUN npm install
#chạy câu lệnh npm run build --prod
RUN npm run build

# stage 2
FROM nginx:latest
COPY --from=node /app/dist/chessGame /usr/share/nginx/html

# Expose port 80
EXPOSE 80
