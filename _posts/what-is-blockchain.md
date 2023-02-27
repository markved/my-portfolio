---
title: 'What is Blockchain'
excerpt: 'Blockchain technology is a decentralized, public ledger that records and verifies digital transactions. It eliminates the need for intermediaries such as banks by using cryptography to convert blocks of transactional data into cryptographic hashes that are connected to each other in order to maintain the entire history of the asset in question. It is the technology behind Bitcoin and other Cryptocurrencies and has the potential to revolutionize many industries by providing a secure, transparent and tamper-proof way of conducting transactions.'
coverImage: '/assets/blog/dynamic-routing/cover.jpg'
date: '2022-03-16T05:35:07.322Z'
author:
  name: Ved Mishra
  picture: '/assets/blog/authors/jj.jpeg'
ogImage:
  url: '/assets/blog/what-is-blockchain/cover.png'
---

![Blockchain Money Transfer](https://vedmishra.net/wp-content/uploads/2018/01/Blockchain-Money-Transfer.png)


Blockchain is an extraordinary technology that underpins Bitcoin and other Cryptocurrencies. It was brought into existence by a cryptographer with an anonymous identity called Satoshi Nakamoto. It has evolved significantly since then.

Before we delve into the full potential of a Blockchain system, it is crucial to understand the distinction between the three things that are often conflated together- the ubiquitous Bitcoin, Cryptocurrencies in general and the Blockchain technology behind them.

In this article, I will tackle the Blockchain technology in depth and try to explain its exceptional potential in layman terms. I will also talk about a few famous Blockchain implementations.

Quite simply put a Blockchain is nothing but a Consensus Asset Ledger.

Fundamentally, it is a shared, immutable, trusted, public ledger that everyone can view, but which no single user controls. It is kept up to date collectively by the participants of the Blockchain, it prevents double-spending and keeps track of transactions continuously. This is how it eliminates the need of a central bank.

Block chain uses cryptography to convert blocks of transactional data into crypto graphical hashes which are connected to each other in order to maintain the entire history of transaction of the asset in question.

This can be better understood by contrasting it with the lifecycle of a financial transaction in a traditional financial system like a bank.

Let’s assume that a sender wants to send money to a receiver. He can do it in numerous ways like write a check, withdraw cash from ATM and hand it over to the receiver, etc. For our discussion, let’s assume that he transfers money online.

To do so,  he logs in to his bank account which is maintained by his bank, using his ID and password, views his account balance, finds the receiver’s account using his ID, email, phone number or any other details, specifies how much to transfer and hits send.

The money doesn’t go to the sender yet. The bank reviews the transaction and verifies that involved parties are legitimate, has enough balance in sender’s account and clear the transaction. Bank updates their ledger with negative amount on sender’s account thus reducing his account balance. It updates receiver’s account by adding same amount to his balance. This way Bank clears transactions occurred between sender and receiver and updates ledger which is accessible within that bank and kept private. Now consider the scenarios when sender has to send money to someone in a different country or to someone whose account is in a different bank. The ledger where transactions are recorded is private for each bank and they cannot solely execute the transaction. In this case, bank relies on third party solution or provider which acts as clearing house. They usually charge a fee and ensure that private ledger of each bank involved is kept in sync.

So in traditional money transfer scenarios, there are intermediaries (highlighted in brackets below) which are involved and they charge a fee for transaction. Sender and Receiver have to trust the bank not running away with the money.

![Traditional Money Transfer](https://vedmishra.net/wp-content/uploads/2018/01/Traditional-Money-Transfer.png)

In the Blockchain system, there are no intermediaries involved. Someone initiates a transaction – in this case Person A initiates a transfer to Person B’s public key (aka his bank user ID). This information between Person A and B’s public keys is broadcast over a network of computers connected on internet. These computers, known as nodes validate the transaction and user’s status using a known algorithm. Once verified, the transaction gets added to the ledger which is public and anyone can see it. However, they don’t see actual user’s identity but the public key which is a long string of characters and hence pseudo-anonymous.  Once the entry is made in the ledger, it can never be altered. The enormous amounts of computing power required to tamper the data makes it impossible for fraudsters to fuddle with this data.

The transaction is now complete. Similar transactions are added to the block and that block is added to the end of the previous block in the chain.

![Blockchain Money Transfer](https://vedmishra.net/wp-content/uploads/2018/01/Blockchain-Money-Transfer.png)

Blockchain fits perfectly in the financial use case; however it can be used to maintain a ledger of virtually anything of value. For example, It can be used to make cheap, tamper-proof public databases—land registries,  (Honduras and Greece are interested); or registers of the ownership of luxury goods or works of art. Financial-services firms are contemplating using Blockchain as a record of who owns what instead of having a series of internal ledgers.

While numerous startup companies are devising clever ways to incorporate block chain into our daily lives, at the moment Crypto currencies remain the most popular use case.

There are more than a thousand crypto currencies in the market, most of them created out of hype and don’t solve any real use case. It can be argued that even the popular ones are overvalued, however there are a lot of innovation happening in this field and it’s just time before we  will see mainstream adoption of the good ones.

Cryptocurrency is borderless, internet money secured by decentralization and encrypted by cryptography. Here are a few popular crypto currencies at very high level. In my next article, I will deep-dive into technical aspects and the unique selling point of each of them.

### Bitcoin 
Bitcoin is the original Cryptocurrency, and was release as open-source software in 2009. The idea started as a decentralized currency but due to speculative values, scarcity, and being underlying crypto to alt coin market – it is ‘for now’ being treated as digital gold. The original code base is in C++. It has now been improved with many features including SegWit and coming soon Lightening network.

### Litecoin 
Litecoin was launched in 2011 as an early alternative to Bitcoin. Charlie lee (ex-director of coinbase (reason why it’s listed on coinbase)) created Litecoin off Bitcoin with some improvements like lightening network, soon to come atomic swap, lower fees. Litecoin’s algorithm is an attempt to even the playing field so that anyone with a regular computer could take part in the network. It’s often called as silver to Bitcoin gold. Litecoin’s total supply is 84M Vs. Bitcoin’s 21M.

### Ethereum
First Blockchain platform that’s programmable. It’s brainchild of then teenager Vitalik Buterin. In the Ethereum blockchain, instead of mining for Bitcoin, miners work to earn Ether, a type of crypto token that fuels the network. Beyond a tradable Cryptocurrency, ether is also used by application developers to pay for transaction fees and services on the Ethereum network.

A use case example – a smart contract can be written between tenant and owner where tenant gets digital key to the house only when he deposits rent money to owner’s account. In this case, the leasing company to manage rent can be avoided. You use Ether to execute smart contract.

### NEO
Similar to Ether but better in a few areas like it supports common programming languages (C#, Java, Python, Go). It has indirect support from Chinese government and it is adaptable to Chinese government compliance. It has western community exposure (City of Zion)

### Monero 
Monero is a secure, private and untraceable currency system. Monero uses a special kind of cryptography to ensure that all of its transactions remain 100% unlinkable and untraceable.

Crypto currency is just one of the use cases of Blockchain. There are other use cases such as:

### Smart Contracts
Distributed ledgers of Blockchain can be utilized to create contracts between two parties without any intermediaries involved. I.e. Rental agreement

### Funding a company
Known as Initial Coin Offering (ICO) – Think of it as Initial public offering but involving crypto currencies instead of company’s stock. Blockchain concept is utilized to get investment from general masses. Ethereum is one of the very popular blockchain programming platforms to provide crowd funding tools

### Auditing
Auditing data on blockchain is more secure, robust. The data on blockchain is incorruptible and unalterable.  Insurance and Supply chain industries can benefit a lot from this.

### File storage
Decentralized file storage on the internet keeps the data distributed with higher throughput, consistency and security

### Internet of Things (IoT)
Devices on internet can be programmed using blockchain to facilitate transactions. For example, a washing machine can check levels of detergent and order and pay for new pack online. Drone can capture this information and deliver the product at your door step without any human intervention.

### Identity Management
Identity fraud, misrepresentation, privacy of own data and many things related to individual’s identity can be kept safer on blockchain. CIVIC is a prime example of blockchain implementation in this regard. You can attach biometric identification to a device which stores your own personal data. Organizations can access your data only at your request. You cannot create duplicate identities and background checks on your data is validated once. This will be very helpful in HR industry where it takes weeks and weeks for candidate’s background checks for a company where that candidate has already been vetted and verified by his previous employers. If information is already present and verified on blockchain through his previous employers and institutions, new organization can just request access to that data and use to validate and speed up onboarding process.

Crypto currencies market is very speculative at the moment but the underlying Blockchain technology is truly revolutionary and provides a platform to create more trusted and direct peer to peer solutions. Blockchain is here to stay.

Stay tuned for my next article on deeper-dive of some of the concepts presented here.
