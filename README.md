<!--lint disable no-literal-urls-->
<p align="center">
  <img
      src="https://upload.wikimedia.org/wikipedia/en/thumb/8/80/NFL_Draft_logo.svg/1200px-NFL_Draft_logo.svg.png"
      width="400"
   />
</p>

# Mock Draft Simulator API <!-- omit in toc -->
## Table of Contents <!-- omit in toc -->
- [Description](#description)
- [Geek Speak](#geek-speak)
- [Development](#development)

## Description

This project contains the API for the mock draft simulator.

## Geek Speak
This API service will use `Docker-Compose` to bundle its dedicated MongoDB database alongside of it.

## Development

To develop the project, you must have docker and docker-compose installed. I'm currently running `Docker` version `20.10.3` and `Docker-Compose` version 1.25.0. I can't guarantee proper function with any version prior to that.

Currently, project is purely in development, so the `docker-compose.yml` file is set up for a local environment. Once this project reaches an alpha state, I will introduce a proper `docker-compose.override.yml` for developmental purposes.

To develop the project, simply run the following command from the root directory:
```bash
docker-compose up
```
