

contract MyToken {

    // public variables here
    string public name = "nikko";
    string public symbol = "NIK";
    unit public totalSupply = 0;
    
    // mapping variable here
    mapping(address => nint) public balances;
    
    // mint function
    function mint (address _address, nint _value) public{
        totalSupply += _value;
        balances[_address] += _value;
    }
    
    // burn function
    function burn (address _address, nint _value) public{
        if(balances[_address] >= _value){
          totalSupply -= _value;
          balances[_address] -= _value;
        }
}

}
