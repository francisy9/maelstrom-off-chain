# Off-Chain Storage Repository

This repository contains files and scripts related to managing and uploading data onto the IPFS storage solution. It is primarily used for storing and handling off-chain data for game assets, such as card-specific JSON metadata and related utilities.

## Repository Contents

metadata/:

Stores JSON files representing card metadata, including descriptions, stats, and effects.

scripts/:

Contains scripts for automating tasks like uploading files to IPFS, validating JSON structure, and retrieving file CIDs.

config/:

Configuration files for IPFS gateways or API keys (e.g., Pinata or other IPFS providers).

tests/:

Test files for validating JSON metadata or ensuring proper functionality of upload scripts.

## Running scripts

To run a script, use the following command:

```
node -r dotenv/config {script to run}
```
