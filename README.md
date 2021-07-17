# Mock Draft Simulator API <!-- omit in toc -->
## Table of Contents <!-- omit in toc -->
- [Description](#description)
- [Geek Speak](#geek-speak)
- [Development](#development)
- [Notable Files](#notable-files)

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

## Notable Files

| File | Description |
|-|-|
| [`scripts/data_retrieval/pullPff.js`](scripts/data_retrieval/pullPff.js) | `JavaScript` script that pulls the publicly available player data from the Pro Football Focus API. This was used to populate my database with its data. |
