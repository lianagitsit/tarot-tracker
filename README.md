# tarot-tracker

## Docker stuff
Troubleshoot a crashing container:
Change CMD in Dockerfile to
`CMD ["sleep", "10000000"]`
Build and run the container
Bash into the container:
`docker exec -it [container ID] bash`
Execute the failing command