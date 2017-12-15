var vtckOutput={
   "contracts" : {
      "SafeMath.sol:SafeMath" : {
         "abi" : "[]",
         "bin" : "60606040523415600e57600080fd5b603580601b6000396000f3006060604052600080fd00a165627a7a72305820b29ec3e37eafd2066bde0ae9074eba614d1f2e0097d8986ddcf70a97570000d10029"
      },
      "VotingToChangeKeys.sol:VotingToChangeKeys" : {
         "abi" : "[{\"constant\":false,\"inputs\":[{\"name\":\"_id\",\"type\":\"uint256\"}],\"name\":\"finalize\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_id\",\"type\":\"uint256\"}],\"name\":\"getIsFinalized\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_id\",\"type\":\"uint256\"},{\"name\":\"_votingKey\",\"type\":\"address\"}],\"name\":\"isValidVote\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_id\",\"type\":\"uint256\"}],\"name\":\"getMiningKey\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"getBallotsStorage\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"activeBallots\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_id\",\"type\":\"uint256\"}],\"name\":\"getTotalVoters\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"getTime\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_miningKey\",\"type\":\"address\"}],\"name\":\"withinLimit\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_id\",\"type\":\"uint256\"}],\"name\":\"getAffectedKeyType\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_votingKey\",\"type\":\"address\"}],\"name\":\"getMiningByVotingKey\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"activeBallotsLength\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"thresholdForKeysType\",\"outputs\":[{\"name\":\"\",\"type\":\"uint8\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_currentKey\",\"type\":\"address\"},{\"name\":\"_affectedKey\",\"type\":\"address\"}],\"name\":\"checkIfMiningExisted\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_id\",\"type\":\"uint256\"}],\"name\":\"isActive\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_ballotType\",\"type\":\"uint256\"},{\"name\":\"_affectedKey\",\"type\":\"address\"},{\"name\":\"_affectedKeyType\",\"type\":\"uint256\"},{\"name\":\"_miningKey\",\"type\":\"address\"}],\"name\":\"areBallotParamsValid\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_startTime\",\"type\":\"uint256\"},{\"name\":\"_endTime\",\"type\":\"uint256\"},{\"name\":\"_affectedKey\",\"type\":\"address\"},{\"name\":\"_affectedKeyType\",\"type\":\"uint256\"},{\"name\":\"_miningKey\",\"type\":\"address\"},{\"name\":\"_ballotType\",\"type\":\"uint256\"}],\"name\":\"createVotingForKeys\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_id\",\"type\":\"uint256\"}],\"name\":\"getAffectedKey\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_id\",\"type\":\"uint256\"}],\"name\":\"getEndTime\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_id\",\"type\":\"uint256\"},{\"name\":\"_choice\",\"type\":\"uint8\"}],\"name\":\"vote\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"getKeysManager\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"proxyStorage\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"maxOldMiningKeysDeepCheck\",\"outputs\":[{\"name\":\"\",\"type\":\"uint8\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_id\",\"type\":\"uint256\"}],\"name\":\"getStartTime\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_id\",\"type\":\"uint256\"}],\"name\":\"getMinThresholdOfVoters\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_id\",\"type\":\"uint256\"},{\"name\":\"_votingKey\",\"type\":\"address\"}],\"name\":\"hasAlreadyVoted\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"getGlobalMinThresholdOfVoters\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_id\",\"type\":\"uint256\"},{\"name\":\"_miningKey\",\"type\":\"address\"}],\"name\":\"areOldMiningKeysVoted\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_id\",\"type\":\"uint256\"}],\"name\":\"getBallotType\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"nextBallotId\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_id\",\"type\":\"uint256\"}],\"name\":\"getProgress\",\"outputs\":[{\"name\":\"\",\"type\":\"int256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"address\"}],\"name\":\"validatorActiveBallots\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"getBallotLimitPerValidator\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"votingState\",\"outputs\":[{\"name\":\"startTime\",\"type\":\"uint256\"},{\"name\":\"endTime\",\"type\":\"uint256\"},{\"name\":\"affectedKey\",\"type\":\"address\"},{\"name\":\"affectedKeyType\",\"type\":\"uint256\"},{\"name\":\"miningKey\",\"type\":\"address\"},{\"name\":\"totalVoters\",\"type\":\"uint256\"},{\"name\":\"progress\",\"type\":\"int256\"},{\"name\":\"isFinalized\",\"type\":\"bool\"},{\"name\":\"quorumState\",\"type\":\"uint8\"},{\"name\":\"ballotType\",\"type\":\"uint256\"},{\"name\":\"index\",\"type\":\"uint256\"},{\"name\":\"minThresholdOfVoters\",\"type\":\"uint256\"},{\"name\":\"creator\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"name\":\"_proxyStorage\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"id\",\"type\":\"uint256\"},{\"indexed\":false,\"name\":\"decision\",\"type\":\"uint256\"},{\"indexed\":true,\"name\":\"voter\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"time\",\"type\":\"uint256\"}],\"name\":\"Vote\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"id\",\"type\":\"uint256\"},{\"indexed\":true,\"name\":\"voter\",\"type\":\"address\"}],\"name\":\"BallotFinalized\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"id\",\"type\":\"uint256\"},{\"indexed\":true,\"name\":\"ballotType\",\"type\":\"uint256\"},{\"indexed\":true,\"name\":\"creator\",\"type\":\"address\"}],\"name\":\"BallotCreated\",\"type\":\"event\"}]",
         "bin" : "60606040526000805460a060020a60ff021916741900000000000000000000000000000000000000001790556004805460ff19166001179055341561004357600080fd5b604051602080611e958339810160405280805160008054600160a060020a03909216600160a060020a03199092169190911790555050611e0d806100886000396000f3006060604052600436106101925763ffffffff60e060020a60003504166305261aea811461019757806323e1a0a8146101af578063288fa739146101d95780632d23bced146101fb57806336ee77731461022d5780633bf05e951461024057806343d3a4c114610268578063557ed1ba1461027e5780635c2a8994146102915780635dfbf9e9146102b0578063616cec39146102c65780636ccc0234146102e55780637217120a146102f8578063731fcb9a1461032157806382afd23b146103465780638a14bb1e1461035c5780638a61134614610388578063905f5ce8146103ba5780639067b677146103d0578063943e8216146103e65780639a57378614610402578063ae4b1b5b14610415578063b9bdaa0714610428578063bc2be1be1461043b578063c088003d14610451578063c14bfd2914610467578063c5c8099914610489578063c7dea7771461049c578063ce21986b146104be578063dc6bfbb5146104d4578063e11efa06146104e7578063f49774ee146104fd578063fcff021c1461051c578063ff84c45f1461052f575b600080fd5b34156101a257600080fd5b6101ad6004356105c0565b005b34156101ba57600080fd5b6101c56004356106e0565b604051901515815260200160405180910390f35b34156101e457600080fd5b6101c5600435600160a060020a03602435166106f8565b341561020657600080fd5b610211600435610749565b604051600160a060020a03909116815260200160405180910390f35b341561023857600080fd5b610211610767565b341561024b57600080fd5b6102566004356107cf565b60405190815260200160405180910390f35b341561027357600080fd5b6102566004356107ee565b341561028957600080fd5b610256610804565b341561029c57600080fd5b6101c5600160a060020a0360043516610808565b34156102bb57600080fd5b610256600435610834565b34156102d157600080fd5b610211600160a060020a0360043516610849565b34156102f057600080fd5b6102566108ce565b341561030357600080fd5b61030b6108d4565b60405160ff909116815260200160405180910390f35b341561032c57600080fd5b6101c5600160a060020a03600435811690602435166108dd565b341561035157600080fd5b6101c56004356109e1565b341561036757600080fd5b6101c5600435600160a060020a036024358116906044359060643516610a19565b341561039357600080fd5b6101ad600435602435600160a060020a03604435811690606435906084351660a435610d97565b34156103c557600080fd5b6102116004356110e9565b34156103db57600080fd5b610256600435611107565b34156103f157600080fd5b6101ad60043560ff6024351661111c565b341561040d57600080fd5b610211611293565b341561042057600080fd5b6102116112db565b341561043357600080fd5b61030b6112ea565b341561044657600080fd5b61025660043561130b565b341561045c57600080fd5b61025660043561131d565b341561047257600080fd5b6101c5600435600160a060020a0360243516611332565b341561049457600080fd5b610256611371565b34156104a757600080fd5b6101c5600435600160a060020a03602435166113f8565b34156104c957600080fd5b61025660043561151a565b34156104df57600080fd5b61025661152f565b34156104f257600080fd5b610256600435611535565b341561050857600080fd5b610256600160a060020a036004351661154a565b341561052757600080fd5b61025661155c565b341561053a57600080fd5b6105456004356115af565b6040519c8d5260208d019b909b52600160a060020a03998a166040808e019190915260608d019990995296891660808c015260a08b019590955260c08a019390935290151560e089015260ff1661010088015261012087015261014086015261016085015291166101808301526101a0909101905180910390f35b60003360006105cd611293565b905080600160a060020a03166362b46d648360006040516020015260405160e060020a63ffffffff8416028152600160a060020a039091166004820152602401602060405180830381600087803b151561062657600080fd5b6102c65a03f1151561063757600080fd5b50505060405180519050151561064c57600080fd5b610655846109e1565b1561065f57600080fd5b610668846106e0565b1561067257600080fd5b6000848152600560205260409020925061068b84611624565b610694846116cc565b60078301805460ff19166001179055600160a060020a033316847f3b208472607d900e1f689c976139d1147afc463fa00df525e9aff8b0604d298460405160405180910390a350505050565b60009081526005602052604090206007015460ff1690565b60008060008061070785610849565b92506107138686611332565b15915061072086846113f8565b1590508180156107345750610734866109e1565b801561073d5750805b93505b50505092915050565b600090815260056020526040902060040154600160a060020a031690565b60008054600160a060020a03166336ee777382604051602001526040518163ffffffff1660e060020a028152600401602060405180830381600087803b15156107af57600080fd5b6102c65a03f115156107c057600080fd5b50505060405180519150505b90565b60028054829081106107dd57fe5b600091825260209091200154905081565b6000908152600560208190526040909120015490565b4290565b600061081261155c565b600160a060020a03831660009081526006602052604090205411159050919050565b60009081526005602052604090206003015490565b600080610854611293565b905080600160a060020a0316632d2602278460006040516020015260405160e060020a63ffffffff8416028152600160a060020a039091166004820152602401602060405180830381600087803b15156108ad57600080fd5b6102c65a03f115156108be57600080fd5b5050506040518051949350505050565b60035481565b60045460ff1681565b6000806000806108eb611293565b9250600091505b60005460ff74010000000000000000000000000000000000000000909104811690831610156109d55782600160a060020a031663a5a36dee8760006040516020015260405160e060020a63ffffffff8416028152600160a060020a039091166004820152602401602060405180830381600087803b151561097257600080fd5b6102c65a03f1151561098357600080fd5b5050506040518051915050600160a060020a03811615156109a75760009350610740565b84600160a060020a031681600160a060020a031614156109ca5760019350610740565b9450600101846108f2565b50600095945050505050565b6000806109ec610804565b6109f58461130b565b11158015610a125750610a0783611107565b610a0f610804565b11155b9392505050565b600080808080600187148015610a30575060028914155b15610a4957610a3f86896108dd565b15610a4957600080fd5b60008711610a5657600080fd5b600160a060020a0388161515610a6b57600080fd5b610a73611293565b935083600160a060020a0316639bc91c228760006040516020015260405160e060020a63ffffffff8416028152600160a060020a039091166004820152602401602060405180830381600087803b1515610acc57600080fd5b6102c65a03f11515610add57600080fd5b50505060405180519350506001871415610b14576002891415610b0257829450610d8b565b6001891415610b145760019450610d8b565b600160a060020a038881169087161415610b2d57600080fd5b6002891480610b3c5750600389145b15610d86576001871415610b5257829450610d8b565b6002871415610c6d5783600160a060020a0316632befe2e18760006040516020015260405160e060020a63ffffffff8416028152600160a060020a039091166004820152602401602060405180830381600087803b1515610bb257600080fd5b6102c65a03f11515610bc357600080fd5b5050506040518051925050600160a060020a0384166362b46d648360006040516020015260405160e060020a63ffffffff8416028152600160a060020a039091166004820152602401602060405180830381600087803b1515610c2557600080fd5b6102c65a03f11515610c3657600080fd5b505050604051805190508015610c5d575081600160a060020a031688600160a060020a0316145b8015610c665750825b9450610d8b565b6003871415610d865783600160a060020a0316637cded9308760006040516020015260405160e060020a63ffffffff8416028152600160a060020a039091166004820152602401602060405180830381600087803b1515610ccd57600080fd5b6102c65a03f11515610cde57600080fd5b5050506040518051915050600160a060020a03841663fee092858760006040516020015260405160e060020a63ffffffff8416028152600160a060020a039091166004820152602401602060405180830381600087803b1515610d4057600080fd5b6102c65a03f11515610d5157600080fd5b505050604051805190508015610c5d575080600160a060020a031688600160a060020a0316148015610c665750829450610d8b565b600194505b50505050949350505050565b6000610da1611d15565b336000610dac611293565b905080600160a060020a03166362b46d648360006040516020015260405160e060020a63ffffffff8416028152600160a060020a039091166004820152602401602060405180830381600087803b1515610e0557600080fd5b6102c65a03f11515610e1657600080fd5b505050604051805190501515610e2b57600080fd5b60008a118015610e3b5750600089115b1515610e4657600080fd5b8989118015610e5b5750610e58610804565b8a115b1515610e6657600080fd5b610e7285898989610a19565b1515610e7d57600080fd5b610e8633610849565b9350610e9184610808565b1515610e9c57600080fd5b6101a0604051908101604052808b81526020018a815260200189600160a060020a0316815260200188815260200187600160a060020a03168152602001600081526020016000815260200160001515815260200160016003811115610efd57fe5b60ff168152602081018790526002546040820152606001610f1c611371565b8152600160a060020a038616602091820152600154600090815260059091526040902090935083908151815560208201518160010155604082015160028201805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a039290921691909117905560608201518160030155608082015160048201805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a039290921691909117905560a0820151816005015560c0820151816006015560e082015160078201805460ff19169115159190911790556101008201518160070160016101000a81548160ff021916908360ff1602179055506101208201518160080155610140820151816009015561016082015181600a0155610180820151600c91909101805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0390921691909117905550600280546001810161107c8382611d9e565b506000918252602090912060015491015560025460035561109b611725565b33600160a060020a0316856001547fd1ba591c76ef71222e2d30b8277758713cc6eef1de29efaf98a716744ac2420b60405160405180910390a4505060018054810190555050505050505050565b600090815260056020526040902060020154600160a060020a031690565b60009081526005602052604090206001015490565b60008033600061112a611293565b905080600160a060020a03166362b46d648360006040516020015260405160e060020a63ffffffff8416028152600160a060020a039091166004820152602401602060405180830381600087803b151561118357600080fd5b6102c65a03f1151561119457600080fd5b5050506040518051905015156111a957600080fd5b600086815260056020526040902093506111c233610849565b92506111ce86336106f8565b15156111d957600080fd5b60018560ff1614156111f557600684018054600101905561120e565b60028560ff161415610192576006840180546000190190555b6005840180546001908101909155600160a060020a038085166000908152600b870160205260409020805460ff19169092179091553316867fefe093a4d43989abdc752b6c4361e6dd161ad5dc05f0eeb42aa006d49352f79b87611270610804565b60405160ff909216825260208201526040908101905180910390a3505050505050565b60008054600160a060020a0316639a57378682604051602001526040518163ffffffff1660e060020a028152600401602060405180830381600087803b15156107af57600080fd5b600054600160a060020a031681565b60005474010000000000000000000000000000000000000000900460ff1681565b60009081526005602052604090205490565b6000908152600560205260409020600a015490565b60008281526005602052604081208161134a84610849565b600160a060020a03166000908152600b9290920160205250604090205460ff169392505050565b60008061137c610767565b600454909150600160a060020a03821690632ffdfc8a9060ff1660006040516020015260405160e060020a63ffffffff841602815260ff9091166004820152602401602060405180830381600087803b15156113d757600080fd5b6102c65a03f115156113e857600080fd5b50505060405180519250505b5090565b6000806000806000611408611293565b600088815260056020526040812091955090935091505b60005460ff740100000000000000000000000000000000000000009091048116908316101561150b5783600160a060020a031663a5a36dee8760006040516020015260405160e060020a63ffffffff8416028152600160a060020a039091166004820152602401602060405180830381600087803b151561149f57600080fd5b6102c65a03f115156114b057600080fd5b5050506040518051915050600160a060020a03811615156114d45760009450611510565b600160a060020a0381166000908152600b8401602052604090205460ff16156115005760019450611510565b94506001018461141f565b600094505b5050505092915050565b60009081526005602052604090206008015490565b60015481565b60009081526005602052604090206006015490565b60066020526000908152604090205481565b600080611567610767565b905080600160a060020a031663fcff021c6000604051602001526040518163ffffffff1660e060020a028152600401602060405180830381600087803b15156113d757600080fd5b600560208190526000918252604090912080546001820154600283015460038401546004850154958501546006860154600787015460088801546009890154600a8a0154600c909a0154989a9799600160a060020a039788169996988816979596949560ff808616966101009096041694168d565b600061162f82611535565b13801561164c57506116408161131d565b611649826107ee565b10155b156116b55761165d8160025b611779565b60016116688261151a565b141561167c57611677816117a5565b6116b0565b60026116878261151a565b1415611696576116778161195e565b60036116a18261151a565b14156116b0576116b081611ade565b6116c0565b6116c0816003611658565b6116c981611c40565b50565b6000818152600560209081526040808320600c810154600160a060020a0316808552600690935292205461170790600163ffffffff611cf416565b600160a060020a039091166000908152600660205260409020555050565b600061173033610849565b600160a060020a03811660009081526006602052604090205490915061175d90600163ffffffff611d0616565b600160a060020a03909116600090815260066020526040902055565b600091825260056020526040909120600701805460ff9092166101000261ff0019909216919091179055565b600060016117b28361151a565b146117bc57600080fd5b6117c4611293565b905060016117d183610834565b14156118425780600160a060020a031663389495146117ef846110e9565b60405160e060020a63ffffffff8416028152600160a060020a039091166004820152602401600060405180830381600087803b151561182d57600080fd5b6102c65a03f1151561183e57600080fd5b5050505b600261184d83610834565b14156118ce5780600160a060020a0316639503ab7261186b846110e9565b61187485610749565b60405160e060020a63ffffffff8516028152600160a060020a03928316600482015291166024820152604401600060405180830381600087803b15156118b957600080fd5b6102c65a03f115156118ca57600080fd5b5050505b60036118d983610834565b141561195a5780600160a060020a031663651ebb5f6118f7846110e9565b61190085610749565b60405160e060020a63ffffffff8516028152600160a060020a03928316600482015291166024820152604401600060405180830381600087803b151561194557600080fd5b6102c65a03f1151561195657600080fd5b5050505b5050565b6000600261196b8361151a565b1461197557600080fd5b61197d611293565b9050600161198a83610834565b14156119fb5780600160a060020a0316637ebf43fc6119a8846110e9565b60405160e060020a63ffffffff8416028152600160a060020a039091166004820152602401600060405180830381600087803b15156119e657600080fd5b6102c65a03f115156119f757600080fd5b5050505b6002611a0683610834565b1415611a775780600160a060020a0316632a968f49611a2484610749565b60405160e060020a63ffffffff8416028152600160a060020a039091166004820152602401600060405180830381600087803b1515611a6257600080fd5b6102c65a03f11515611a7357600080fd5b5050505b6003611a8283610834565b141561195a5780600160a060020a0316631e534e71611aa084610749565b60405160e060020a63ffffffff8416028152600160a060020a039091166004820152602401600060405180830381600087803b151561194557600080fd5b60006003611aeb8361151a565b14611af557600080fd5b611afd611293565b90506001611b0a83610834565b1415611b8b5780600160a060020a031663d44379cf611b28846110e9565b611b3185610749565b60405160e060020a63ffffffff8516028152600160a060020a03928316600482015291166024820152604401600060405180830381600087803b1515611b7657600080fd5b6102c65a03f11515611b8757600080fd5b5050505b6002611b9683610834565b1415611c175780600160a060020a031663d33eb5ae611bb4846110e9565b611bbd85610749565b60405160e060020a63ffffffff8516028152600160a060020a03928316600482015291166024820152604401600060405180830381600087803b1515611c0257600080fd5b6102c65a03f11515611c1357600080fd5b5050505b6003611c2283610834565b141561195a5780600160a060020a031663771ae2996118f7846110e9565b600081815260056020526040812060098101546002805492939192600019810192919083908110611c6d57fe5b906000526020600020900154905080600284815481101515611c8b57fe5b60009182526020808320909101929092558281526005909152604090206009018390556002805483908110611cbc57fe5b600091825260208220018190556002541115611ce7576002805490611ce5906000198301611d9e565b505b5050600254600355505050565b600082821115611d0057fe5b50900390565b600082820183811015610a1257fe5b6101a06040519081016040528060008152602001600081526020016000600160a060020a03168152602001600081526020016000600160a060020a031681526020016000815260200160008152602001600015158152602001600060ff1681526020016000815260200160008152602001600081526020016000600160a060020a031681525090565b815481835581811511611dc257600083815260209020611dc2918101908301611dc7565b505050565b6107cc91905b808211156113f45760008155600101611dcd5600a165627a7a72305820ef2a694ab6739efaa32bb7a0284bc4ab2bba1bc0e2ca892814e08d3348bd95f60029"
      },
      "interfaces/IBallotsStorage.sol:IBallotsStorage" : {
         "abi" : "[{\"constant\":true,\"inputs\":[],\"name\":\"getMaxLimitBallot\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"uint8\"}],\"name\":\"getBallotThreshold\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"\",\"type\":\"uint256\"},{\"name\":\"\",\"type\":\"uint8\"}],\"name\":\"setThreshold\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"getTotalNumberOfValidators\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"getVotingToChangeThreshold\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"getProxyThreshold\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"getBallotLimitPerValidator\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"}]",
         "bin" : ""
      },
      "interfaces/IKeysManager.sol:IKeysManager" : {
         "abi" : "[{\"constant\":false,\"inputs\":[{\"name\":\"\",\"type\":\"address\"}],\"name\":\"removePayoutKey\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"\",\"type\":\"address\"}],\"name\":\"removeVotingKey\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"address\"}],\"name\":\"getVotingByMining\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"address\"}],\"name\":\"getMiningKeyByVoting\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"\",\"type\":\"address\"}],\"name\":\"addMiningKey\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"getTime\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"address\"}],\"name\":\"isVotingActive\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"\",\"type\":\"address\"},{\"name\":\"\",\"type\":\"address\"}],\"name\":\"addPayoutKey\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"\",\"type\":\"address\"},{\"name\":\"\",\"type\":\"address\"}],\"name\":\"swapPayoutKey\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"address\"}],\"name\":\"getPayoutByMining\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"\",\"type\":\"address\"}],\"name\":\"removeMiningKey\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"\",\"type\":\"address\"}],\"name\":\"initiateKeys\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"\",\"type\":\"address\"},{\"name\":\"\",\"type\":\"address\"}],\"name\":\"addVotingKey\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"address\"}],\"name\":\"isMiningActive\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"address\"}],\"name\":\"getMiningKeyHistory\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"address\"}],\"name\":\"getInitialKey\",\"outputs\":[{\"name\":\"\",\"type\":\"uint8\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"\",\"type\":\"address\"},{\"name\":\"\",\"type\":\"address\"},{\"name\":\"\",\"type\":\"address\"}],\"name\":\"createKeys\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"\",\"type\":\"address\"},{\"name\":\"\",\"type\":\"address\"}],\"name\":\"swapVotingKey\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"\",\"type\":\"address\"},{\"name\":\"\",\"type\":\"address\"}],\"name\":\"swapMiningKey\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"address\"}],\"name\":\"isPayoutActive\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"}]",
         "bin" : ""
      },
      "interfaces/IProxyStorage.sol:IProxyStorage" : {
         "abi" : "[{\"constant\":false,\"inputs\":[{\"name\":\"\",\"type\":\"address\"},{\"name\":\"\",\"type\":\"address\"},{\"name\":\"\",\"type\":\"address\"},{\"name\":\"\",\"type\":\"address\"},{\"name\":\"\",\"type\":\"address\"}],\"name\":\"initializeAddresses\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"getBallotsStorage\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"getVotingToChangeKeys\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"getPoaConsensus\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"getKeysManager\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"getVotingToChangeMinThreshold\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"\",\"type\":\"uint256\"},{\"name\":\"\",\"type\":\"address\"}],\"name\":\"setContractAddress\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"}]",
         "bin" : ""
      }
   },
   "version" : "0.4.18+commit.9cf6e910.Darwin.appleclang"
};
