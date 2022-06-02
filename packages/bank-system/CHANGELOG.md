# Changelog

## [2.1.0](https://github.com/mumot1999/sdm-bank/compare/bank-system-v2.0.1...bank-system-v2.1.0) (2022-06-02)


### Features

* add transferable interface ([8a62fc4](https://github.com/mumot1999/sdm-bank/commit/8a62fc4fd43130ca7f8684c76d444289ff1c1828))
* transfer command gets Transferable ([aee0961](https://github.com/mumot1999/sdm-bank/commit/aee096175678f88a80aa9ed30e4cbd42251f00d5))

### [2.0.1](https://github.com/mumot1999/sdm-bank/compare/bank-system-v2.0.0...bank-system-v2.0.1) (2022-05-30)


### Bug Fixes

* **Bank:** create account ([fd8a230](https://github.com/mumot1999/sdm-bank/commit/fd8a23012a8712e97edc79d1ea8bbf2bc56c7847))

## [2.0.0](https://github.com/mumot1999/sdm-bank/compare/bank-system-v1.0.0...bank-system-v2.0.0) (2022-05-30)


### ⚠ BREAKING CHANGES

* bank-system exports new Account class
* remove deposit and loans from bank
* **Account:** gets id in constructor
* **account:** add id property
* **debit-account:** add debit account decorator class

### Features

* account is able to payoff loan in parts ([ec7299a](https://github.com/mumot1999/sdm-bank/commit/ec7299a8e109ac5f57085ba1c2dd5dd3160ef2a8))
* **account:** add id property ([f3e222e](https://github.com/mumot1999/sdm-bank/commit/f3e222ec9b676dabed5f1fdbfd4cb3a8de6aa635))
* **Account:** gets id in constructor ([1748f9d](https://github.com/mumot1999/sdm-bank/commit/1748f9dcf79eff4a967af1cd822b9967cb1296ee))
* add account interfaces ([2076478](https://github.com/mumot1999/sdm-bank/commit/20764786b66e40266c36f2a88032ea9f0d9afb85))
* add Command interface ([f2d96bb](https://github.com/mumot1999/sdm-bank/commit/f2d96bb46ba2487aa91b06155fddc823ce27ea69))
* add indetificable interface ([d0171c5](https://github.com/mumot1999/sdm-bank/commit/d0171c53948f906bb1ebd15828cd07b6d4edd1c8))
* add interest rates to loans ([87060b3](https://github.com/mumot1999/sdm-bank/commit/87060b3c277a57ed073a2a3e0ed23e8f659a31df))
* **debit-account:** add debit account decorator class ([ec2f6bf](https://github.com/mumot1999/sdm-bank/commit/ec2f6bfc68f31b11c3ed4f5db75976a2730de641))
* **DebitAccount:** add id getter fn ([997296b](https://github.com/mumot1999/sdm-bank/commit/997296b268be1ca7a55d7fbca65dc47fa1e7c34e))
* implement bank system ([bcd9dcf](https://github.com/mumot1999/sdm-bank/commit/bcd9dcf6520398f18e43498ca3aed6f0329d44b7))
* save transactions and operations ([298d40a](https://github.com/mumot1999/sdm-bank/commit/298d40a647a94236f907c1f7850ea733aec422dc))
* test ([9630666](https://github.com/mumot1999/sdm-bank/commit/9630666bee508202da9eec1998c5cb809b42af55))
* test ([0d9f4cc](https://github.com/mumot1999/sdm-bank/commit/0d9f4ccf4378046223a04d8b8ce6a9c9871fb4b0))
* **transfer:** add transfer command ([73344cf](https://github.com/mumot1999/sdm-bank/commit/73344cf67768f3354e9f71c8fa1dd4adb1d234fe))
* **transfer:** add transfer invoker ([c725ecd](https://github.com/mumot1999/sdm-bank/commit/c725ecd8241c08428f2630db4dbdb616bd2727f6))


### Bug Fixes

* bank-system exports new Account class ([70ce2f4](https://github.com/mumot1999/sdm-bank/commit/70ce2f460231f9aa3eba834130b4cff25f360d3e))
* remove deposit and loans from bank ([cbe1dd5](https://github.com/mumot1999/sdm-bank/commit/cbe1dd5b6cc67f12093f1f1c780da2624f87602c))

## 1.0.0 (2022-05-30)


### ⚠ BREAKING CHANGES

* **account:** add id property
* **debit-account:** add debit account decorator class

### Features

* account is able to payoff loan in parts ([ec7299a](https://github.com/mumot1999/sdm-bank/commit/ec7299a8e109ac5f57085ba1c2dd5dd3160ef2a8))
* **account:** add id property ([f3e222e](https://github.com/mumot1999/sdm-bank/commit/f3e222ec9b676dabed5f1fdbfd4cb3a8de6aa635))
* add account interfaces ([2076478](https://github.com/mumot1999/sdm-bank/commit/20764786b66e40266c36f2a88032ea9f0d9afb85))
* add Command interface ([f2d96bb](https://github.com/mumot1999/sdm-bank/commit/f2d96bb46ba2487aa91b06155fddc823ce27ea69))
* add interest rates to loans ([87060b3](https://github.com/mumot1999/sdm-bank/commit/87060b3c277a57ed073a2a3e0ed23e8f659a31df))
* **debit-account:** add debit account decorator class ([ec2f6bf](https://github.com/mumot1999/sdm-bank/commit/ec2f6bfc68f31b11c3ed4f5db75976a2730de641))
* implement bank system ([bcd9dcf](https://github.com/mumot1999/sdm-bank/commit/bcd9dcf6520398f18e43498ca3aed6f0329d44b7))
* save transactions and operations ([298d40a](https://github.com/mumot1999/sdm-bank/commit/298d40a647a94236f907c1f7850ea733aec422dc))
* test ([9630666](https://github.com/mumot1999/sdm-bank/commit/9630666bee508202da9eec1998c5cb809b42af55))
* test ([0d9f4cc](https://github.com/mumot1999/sdm-bank/commit/0d9f4ccf4378046223a04d8b8ce6a9c9871fb4b0))
* **transfer:** add transfer command ([73344cf](https://github.com/mumot1999/sdm-bank/commit/73344cf67768f3354e9f71c8fa1dd4adb1d234fe))
* **transfer:** add transfer invoker ([c725ecd](https://github.com/mumot1999/sdm-bank/commit/c725ecd8241c08428f2630db4dbdb616bd2727f6))
