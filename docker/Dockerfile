# Use the official nginx image as the base image
FROM nginx

# Copy your website files to the appropriate location in the container
COPY . /usr/share/nginx/html

# Copy the custom Nginx configuration file to the appropriate location in the container
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80 so that the container can receive incoming traffic
EXPOSE 80
