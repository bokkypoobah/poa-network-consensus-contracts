var vtcmtOutput={
   "contracts" : {
      "SafeMath.sol:SafeMath" : {
         "abi" : "[]",
         "bin" : "60606040523415600e57600080fd5b603580601b6000396000f3006060604052600080fd00a165627a7a72305820b29ec3e37eafd2066bde0ae9074eba614d1f2e0097d8986ddcf70a97570000d10029"
      },
      "VotingToChangeMinThreshold.sol:VotingToChangeMinThreshold" : {
         "abi" : "[{\"constant\":false,\"inputs\":[{\"name\":\"_id\",\"type\":\"uint256\"}],\"name\":\"finalize\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_id\",\"type\":\"uint256\"}],\"name\":\"getIsFinalized\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_id\",\"type\":\"uint256\"},{\"name\":\"_votingKey\",\"type\":\"address\"}],\"name\":\"isValidVote\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"getBallotsStorage\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"activeBallots\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_id\",\"type\":\"uint256\"}],\"name\":\"getTotalVoters\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"getTime\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_miningKey\",\"type\":\"address\"}],\"name\":\"withinLimit\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_votingKey\",\"type\":\"address\"}],\"name\":\"getMiningByVotingKey\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"activeBallotsLength\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"thresholdForKeysType\",\"outputs\":[{\"name\":\"\",\"type\":\"uint8\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_id\",\"type\":\"uint256\"}],\"name\":\"isActive\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_startTime\",\"type\":\"uint256\"},{\"name\":\"_endTime\",\"type\":\"uint256\"},{\"name\":\"_proposedValue\",\"type\":\"uint256\"}],\"name\":\"createBallotToChangeThreshold\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_id\",\"type\":\"uint256\"}],\"name\":\"getEndTime\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_id\",\"type\":\"uint256\"},{\"name\":\"_choice\",\"type\":\"uint8\"}],\"name\":\"vote\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"getKeysManager\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"proxyStorage\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"maxOldMiningKeysDeepCheck\",\"outputs\":[{\"name\":\"\",\"type\":\"uint8\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_id\",\"type\":\"uint256\"}],\"name\":\"getStartTime\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_id\",\"type\":\"uint256\"}],\"name\":\"getMinThresholdOfVoters\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_id\",\"type\":\"uint256\"},{\"name\":\"_votingKey\",\"type\":\"address\"}],\"name\":\"hasAlreadyVoted\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"getGlobalMinThresholdOfVoters\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_id\",\"type\":\"uint256\"},{\"name\":\"_miningKey\",\"type\":\"address\"}],\"name\":\"areOldMiningKeysVoted\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_id\",\"type\":\"uint256\"}],\"name\":\"getProposedValue\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"nextBallotId\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_id\",\"type\":\"uint256\"}],\"name\":\"getProgress\",\"outputs\":[{\"name\":\"\",\"type\":\"int256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"address\"}],\"name\":\"validatorActiveBallots\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"getBallotLimitPerValidator\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"votingState\",\"outputs\":[{\"name\":\"startTime\",\"type\":\"uint256\"},{\"name\":\"endTime\",\"type\":\"uint256\"},{\"name\":\"totalVoters\",\"type\":\"uint256\"},{\"name\":\"progress\",\"type\":\"int256\"},{\"name\":\"isFinalized\",\"type\":\"bool\"},{\"name\":\"quorumState\",\"type\":\"uint8\"},{\"name\":\"index\",\"type\":\"uint256\"},{\"name\":\"minThresholdOfVoters\",\"type\":\"uint256\"},{\"name\":\"proposedValue\",\"type\":\"uint256\"},{\"name\":\"creator\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"name\":\"_proxyStorage\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"id\",\"type\":\"uint256\"},{\"indexed\":false,\"name\":\"decision\",\"type\":\"uint256\"},{\"indexed\":true,\"name\":\"voter\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"time\",\"type\":\"uint256\"}],\"name\":\"Vote\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"id\",\"type\":\"uint256\"},{\"indexed\":true,\"name\":\"voter\",\"type\":\"address\"}],\"name\":\"BallotFinalized\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"id\",\"type\":\"uint256\"},{\"indexed\":true,\"name\":\"ballotType\",\"type\":\"uint256\"},{\"indexed\":true,\"name\":\"creator\",\"type\":\"address\"}],\"name\":\"BallotCreated\",\"type\":\"event\"}]",
         "bin" : "60606040526000805460a060020a60ff021916741900000000000000000000000000000000000000001790556004805460ff19166001179055341561004357600080fd5b6040516020806113ea8339810160405280805160008054600160a060020a03909216600160a060020a03199092169190911790555050611362806100886000396000f30060606040526004361061015b5763ffffffff60e060020a60003504166305261aea811461016057806323e1a0a814610178578063288fa739146101a257806336ee7773146101c45780633bf05e95146101f357806343d3a4c11461021b578063557ed1ba146102315780635c2a899414610244578063616cec39146102635780636ccc0234146102825780637217120a1461029557806382afd23b146102be57806384f23f65146102d45780639067b677146102f0578063943e8216146103065780639a57378614610322578063ae4b1b5b14610335578063b9bdaa0714610348578063bc2be1be1461035b578063c088003d14610371578063c14bfd2914610387578063c5c80999146103a9578063c7dea777146103bc578063d6edcb38146103de578063dc6bfbb5146103f4578063e11efa0614610407578063f49774ee1461041d578063fcff021c1461043c578063ff84c45f1461044f575b600080fd5b341561016b57600080fd5b6101766004356104c5565b005b341561018357600080fd5b61018e6004356105e5565b604051901515815260200160405180910390f35b34156101ad57600080fd5b61018e600435600160a060020a03602435166105fd565b34156101cf57600080fd5b6101d761064c565b604051600160a060020a03909116815260200160405180910390f35b34156101fe57600080fd5b6102096004356106b4565b60405190815260200160405180910390f35b341561022657600080fd5b6102096004356106d3565b341561023c57600080fd5b6102096106e8565b341561024f57600080fd5b61018e600160a060020a03600435166106ec565b341561026e57600080fd5b6101d7600160a060020a0360043516610718565b341561028d57600080fd5b61020961079d565b34156102a057600080fd5b6102a86107a3565b60405160ff909116815260200160405180910390f35b34156102c957600080fd5b61018e6004356107ac565b34156102df57600080fd5b6101766004356024356044356107e4565b34156102fb57600080fd5b610209600435610b13565b341561031157600080fd5b61017660043560ff60243516610b28565b341561032d57600080fd5b6101d7610c9f565b341561034057600080fd5b6101d7610ce7565b341561035357600080fd5b6102a8610cf6565b341561036657600080fd5b610209600435610d17565b341561037c57600080fd5b610209600435610d29565b341561039257600080fd5b61018e600435600160a060020a0360243516610d3e565b34156103b457600080fd5b610209610d7d565b34156103c757600080fd5b61018e600435600160a060020a0360243516610e04565b34156103e957600080fd5b610209600435610f1f565b34156103ff57600080fd5b610209610f34565b341561041257600080fd5b610209600435610f3a565b341561042857600080fd5b610209600160a060020a0360043516610f4f565b341561044757600080fd5b610209610f61565b341561045a57600080fd5b610465600435610fb4565b604051998a5260208a01989098526040808a01979097526060890195909552921515608088015260ff90911660a087015260c086015260e0850152610100840152600160a060020a03909116610120830152610140909101905180910390f35b60003360006104d2610c9f565b905080600160a060020a03166362b46d648360006040516020015260405160e060020a63ffffffff8416028152600160a060020a039091166004820152602401602060405180830381600087803b151561052b57600080fd5b6102c65a03f1151561053c57600080fd5b50505060405180519050151561055157600080fd5b61055a846107ac565b1561056457600080fd5b61056d846105e5565b1561057757600080fd5b6000848152600560205260409020925061059084611011565b610599846110e3565b60048301805460ff19166001179055600160a060020a033316847f3b208472607d900e1f689c976139d1147afc463fa00df525e9aff8b0604d298460405160405180910390a350505050565b60009081526005602052604090206004015460ff1690565b60008060008061060c85610718565b92506106188686610d3e565b1591506106258684610e04565b1590508180156106395750610639866107ac565b80156106425750805b9695505050505050565b60008054600160a060020a03166336ee777382604051602001526040518163ffffffff1660e060020a028152600401602060405180830381600087803b151561069457600080fd5b6102c65a03f115156106a557600080fd5b50505060405180519150505b90565b60028054829081106106c257fe5b600091825260209091200154905081565b60009081526005602052604090206002015490565b4290565b60006106f6610f61565b600160a060020a03831660009081526006602052604090205411159050919050565b600080610723610c9f565b905080600160a060020a0316632d2602278460006040516020015260405160e060020a63ffffffff8416028152600160a060020a039091166004820152602401602060405180830381600087803b151561077c57600080fd5b6102c65a03f1151561078d57600080fd5b5050506040518051949350505050565b60035481565b60045460ff1681565b6000806107b76106e8565b6107c084610d17565b111580156107dd57506107d283610b13565b6107da6106e8565b11155b9392505050565b60006107ee611291565b3360006107f9610c9f565b905080600160a060020a03166362b46d648360006040516020015260405160e060020a63ffffffff8416028152600160a060020a039091166004820152602401602060405180830381600087803b151561085257600080fd5b6102c65a03f1151561086357600080fd5b50505060405180519050151561087857600080fd5b84600061088361064c565b90506003821015801561089d5750610899610d7d565b8214155b15156108a857600080fd5b80600160a060020a031663eecd10796000604051602001526040518163ffffffff1660e060020a028152600401602060405180830381600087803b15156108ee57600080fd5b6102c65a03f115156108ff57600080fd5b5050506040518051831115905061091557600080fd5b6000891180156109255750600088115b151561093057600080fd5b888811801561094557506109426106e8565b89115b151561095057600080fd5b61095933610718565b9550610964866106ec565b151561096f57600080fd5b61014060405190810160409081528a8252602082018a90526000908201819052606082018190526080820152600160a082015260025460c082015260e081016109b6610d7d565b815260208082018a9052600160a060020a0389166040928301526001546000908152600590915220909550859081518155602082015181600101556040820151816002015560608201518160030155608082015160048201805460ff191691151591909117905560a08201518160040160016101000a81548160ff021916908360ff16021790555060c0820151816005015560e082015181600601556101008201518160070155610120820151600991909101805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a03909216919091179055506002805460018101610aa683826112f3565b5060009182526020909120600154910155600254600355610ac561113c565b33600160a060020a031660046001547fd1ba591c76ef71222e2d30b8277758713cc6eef1de29efaf98a716744ac2420b60405160405180910390a45050600180548101905550505050505050565b60009081526005602052604090206001015490565b600080336000610b36610c9f565b905080600160a060020a03166362b46d648360006040516020015260405160e060020a63ffffffff8416028152600160a060020a039091166004820152602401602060405180830381600087803b1515610b8f57600080fd5b6102c65a03f11515610ba057600080fd5b505050604051805190501515610bb557600080fd5b60008681526005602052604090209350610bce33610718565b9250610bda86336105fd565b1515610be557600080fd5b60018560ff161415610c01576003840180546001019055610c1a565b60028560ff16141561015b576003840180546000190190555b6002840180546001908101909155600160a060020a0380851660009081526008870160205260409020805460ff19169092179091553316867fefe093a4d43989abdc752b6c4361e6dd161ad5dc05f0eeb42aa006d49352f79b87610c7c6106e8565b60405160ff909216825260208201526040908101905180910390a3505050505050565b60008054600160a060020a0316639a57378682604051602001526040518163ffffffff1660e060020a028152600401602060405180830381600087803b151561069457600080fd5b600054600160a060020a031681565b60005474010000000000000000000000000000000000000000900460ff1681565b60009081526005602052604090205490565b60009081526005602052604090206006015490565b600082815260056020526040812081610d5684610718565b600160a060020a0316600090815260089290920160205250604090205460ff169392505050565b600080610d8861064c565b600454909150600160a060020a03821690632ffdfc8a9060ff1660006040516020015260405160e060020a63ffffffff841602815260ff9091166004820152602401602060405180830381600087803b1515610de357600080fd5b6102c65a03f11515610df457600080fd5b50505060405180519250505b5090565b6000828152600560205260408120818080610e1d610c9f565b9250600091505b60005460ff7401000000000000000000000000000000000000000090910481169083161015610f105782600160a060020a031663458779da8760006040516020015260405160e060020a63ffffffff8416028152600160a060020a039091166004820152602401602060405180830381600087803b1515610ea457600080fd5b6102c65a03f11515610eb557600080fd5b5050506040518051915050600160a060020a0381161515610ed95760009450610f15565b600160a060020a038116600090815260088501602052604090205460ff1615610f055760019450610f15565b945060010184610e24565b600094505b5050505092915050565b60009081526005602052604090206007015490565b60015481565b60009081526005602052604090206003015490565b60066020526000908152604090205481565b600080610f6c61064c565b905080600160a060020a031663fcff021c6000604051602001526040518163ffffffff1660e060020a028152600401602060405180830381600087803b1515610de357600080fd5b6005602081905260009182526040909120805460018201546002830154600384015460048501549585015460068601546007870154600990970154959794969395929460ff808216956101009092041693600160a060020a03168a565b600061101b61064c565b9050600061102883610f3a565b138015611045575061103982610d29565b611042836106d3565b10155b156110cb576110568260025b611190565b80600160a060020a0316637429414461106e84610f1f565b60045460ff1660405160e060020a63ffffffff8516028152600481019290925260ff166024820152604401600060405180830381600087803b15156110b257600080fd5b6102c65a03f115156110c357600080fd5b5050506110d6565b6110d6826003611051565b6110df826111bc565b5050565b60008181526005602090815260408083206009810154600160a060020a0316808552600690935292205461111e90600163ffffffff61127016565b600160a060020a039091166000908152600660205260409020555050565b600061114733610718565b600160a060020a03811660009081526006602052604090205490915061117490600163ffffffff61128216565b600160a060020a03909116600090815260066020526040902055565b600091825260056020526040909120600401805460ff9092166101000261ff0019909216919091179055565b600081815260056020819052604082209081015460028054929391926000198101929190839081106111ea57fe5b90600052602060002090015490508060028481548110151561120857fe5b60009182526020808320909101929092558281526005918290526040902001839055600280548390811061123857fe5b6000918252602082200181905560025411156112635760028054906112619060001983016112f3565b505b5050600254600355505050565b60008282111561127c57fe5b50900390565b6000828201838110156107dd57fe5b6101406040519081016040528060008152602001600081526020016000815260200160008152602001600015158152602001600060ff1681526020016000815260200160008152602001600081526020016000600160a060020a031681525090565b8154818355818115116113175760008381526020902061131791810190830161131c565b505050565b6106b191905b80821115610e0057600081556001016113225600a165627a7a72305820178ac9c032e160c295297fad62d00cb648c312a16e86e2366f9112ba86fb23190029"
      },
      "interfaces/IBallotsStorage.sol:IBallotsStorage" : {
         "abi" : "[{\"constant\":true,\"inputs\":[],\"name\":\"getMaxLimitBallot\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"uint8\"}],\"name\":\"getBallotThreshold\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"\",\"type\":\"uint256\"},{\"name\":\"\",\"type\":\"uint8\"}],\"name\":\"setThreshold\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"getTotalNumberOfValidators\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"getVotingToChangeThreshold\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"getProxyThreshold\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"getBallotLimitPerValidator\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"}]",
         "bin" : ""
      },
      "interfaces/IKeysManager.sol:IKeysManager" : {
         "abi" : "[{\"constant\":false,\"inputs\":[{\"name\":\"\",\"type\":\"address\"}],\"name\":\"removePayoutKey\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"\",\"type\":\"address\"}],\"name\":\"removeVotingKey\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"address\"}],\"name\":\"getVotingByMining\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"address\"}],\"name\":\"getMiningKeyByVoting\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"\",\"type\":\"address\"}],\"name\":\"addMiningKey\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"poaNetworkConsensus\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"address\"}],\"name\":\"miningKeyHistory\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"getTime\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"address\"}],\"name\":\"isVotingActive\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"\",\"type\":\"address\"},{\"name\":\"\",\"type\":\"address\"}],\"name\":\"addPayoutKey\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"address\"}],\"name\":\"initialKeys\",\"outputs\":[{\"name\":\"\",\"type\":\"uint8\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"\",\"type\":\"address\"},{\"name\":\"\",\"type\":\"address\"}],\"name\":\"swapPayoutKey\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"address\"}],\"name\":\"getPayoutByMining\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"\",\"type\":\"address\"}],\"name\":\"removeMiningKey\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"maxLimitValidators\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"\",\"type\":\"address\"}],\"name\":\"initiateKeys\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"\",\"type\":\"address\"},{\"name\":\"\",\"type\":\"address\"}],\"name\":\"addVotingKey\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"address\"}],\"name\":\"isMiningActive\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"\",\"type\":\"address\"},{\"name\":\"\",\"type\":\"address\"},{\"name\":\"\",\"type\":\"address\"}],\"name\":\"createKeys\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"initialKeysCount\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"\",\"type\":\"address\"},{\"name\":\"\",\"type\":\"address\"}],\"name\":\"swapVotingKey\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"\",\"type\":\"address\"},{\"name\":\"\",\"type\":\"address\"}],\"name\":\"swapMiningKey\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"maxNumberOfInitialKeys\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"masterOfCeremony\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"address\"}],\"name\":\"isPayoutActive\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"}]",
         "bin" : ""
      },
      "interfaces/IProxyStorage.sol:IProxyStorage" : {
         "abi" : "[{\"constant\":false,\"inputs\":[{\"name\":\"\",\"type\":\"address\"},{\"name\":\"\",\"type\":\"address\"},{\"name\":\"\",\"type\":\"address\"},{\"name\":\"\",\"type\":\"address\"},{\"name\":\"\",\"type\":\"address\"}],\"name\":\"initializeAddresses\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"getBallotsStorage\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"getVotingToChangeKeys\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"getPoaConsensus\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"getKeysManager\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"getVotingToChangeMinThreshold\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"\",\"type\":\"uint256\"},{\"name\":\"\",\"type\":\"address\"}],\"name\":\"setContractAddress\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"}]",
         "bin" : ""
      }
   },
   "version" : "0.4.18+commit.9cf6e910.Darwin.appleclang"
};