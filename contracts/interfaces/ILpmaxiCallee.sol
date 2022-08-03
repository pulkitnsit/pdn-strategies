pragma solidity >=0.5.0;

interface ILpmaxiCallee {
    function lpmaxiBorrow(
        address sender,
        address borrower,
        uint256 borrowAmount,
        bytes calldata data
    ) external;

    function lpmaxiRedeem(
        address sender,
        uint256 redeemAmount,
        bytes calldata data
    ) external;
}
