# LpMaxi Protocol

LpMaxi is a protocol that allows users to farm LPs and tokens using leveraged yield farming strategies. Users can go long, short, pseudo-delta neutral on tokens while farming yield on its LPs.


# How Users can earn yield

Users can **earn yield using two ways**:


### 1) Lend tokens:

Users will be able to lend tokens like Matic, Eth, Quick, etc, and **earn interest** on it. 

As this will be single staking, users will **not have any impermanent loss**. 


### 2) Provide Liquidity through various strategy:

Consider the example where a user would like to provide liquidity for the Matic-USDC pair and earn a yield on it.


#### - PDN (Pseudo Delta Neutral) Strategy: If User is Neutral on Matic and wants the lowest risk:



* The user will provide USDC (this will also act as collateral) to the protocol.
* The protocol will **borrow equivalent** Matic from the lending pool (which contains the tokens provided by Lenders in the previous objective)
* The protocol will then create Matic-USDC LP and deposit it to DEXes like Quickswap/Uniswap to **earn farming yield**.
* If the price of Matic decreases or increases, it will be offset by the borrowed amount of Matic.


#### - Long LP strategy: If User is bullish on Matic, and wants higher gain (minimal IL) when price of Matic increases while farming Matic-USDC LP (contains more risk than PDN):



* The user will provide Matic to the protocol (As the user is bullish on Matic, he will provide Matic).
* The protocol will **borrow equivalent** USDC from the lending pool.
* The protocol will then create Matic-USDC LP and deposit it to DEXes like Quickswap/Uniswap to **earn farming yield**.
* If the price of Matic increases, the IL will be offset by the borrowed amount of USDC.


#### - Short LP strategy: If User is bearish on Matic, and wants gain when price of Matic decreases while farming Matic-USDC LP (contains more risk than PDN):



* The user will provide USDC to the protocol.
* The protocol will **borrow** **3x the amount in** Matic (so if the user deposited $100 USDC, the protocol will borrow $300 Matic) from the lending pool.
* The protocol will sell 1x amount in Matic for USDC (Like sell $100 Matic for USDC).
* The protocol will then create Matic-USDC LP and deposit it to DEXes like Quickswap/Uniswap to **earn farming yield**.
* In the above example, the user deposited $100 USDC, and with borrowed $300 Matic, he has a $400 LP ($200 USDC with 200$ Matic). 
* If the price of Matic decreases, the user will have to pay less Matic (in dollar amount) to protocol, and hence will make profit as the price of Matic decreases while earning farming yield.


#### - Custom Ratios: Advanced functionality where users can choose a custom borrow amount.



* The user will choose the amount of token/LP they want to deposit.
* They will also select the borrow amount of both the tokens in the LP according to their requirement.
* The protocol will take the borrowed amount and the amount deposited by the user, and create the LP from them.

All the positions will be balanced according to the defined ratios by the bots.

Lenders and Liquidity providers can withdraw their tokens at any point in time.