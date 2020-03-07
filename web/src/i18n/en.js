const EN_TEXT = {
    profile_setting: "Profile setting",
    profile_setup: "Set up profile",
    add_one_conn_profile: "Add one connection profile.",
    add_one_identity: "Add one identity.",
    connection_profile: "Connection profile",
    connection_profile_upload: "Upload a connection profile...",
    connection_profile_example: "connection \n<br>profile\r\n<br/>example",
    connection_profile_add: "Add a connection profile",
    id_certificate_upload: "Upload an identity certificate...",
    id_private_key_upload: "Upload an idenitty private key...",
    identity_add: "Add an identity",
    msp_id: "MSP ID",
    id_common_name: "Common name",
    id_cn: "CN",
    id_subject: "Subject",
    id_issuer: "Issuer",
    

    label: "Label",
    add: "Add",
    create: "Create",
    join: "Join",
    install: "Install",
    instantiate: "Instantiate",
    upgarde: "Upgrade",
    execute_on: "Execute on %v",
    execute: "Execute",
    query: "Query",
    action: "Action",
    cancel: "Cancel",
    ok: "OK",
    network: "Network",
    example: "Example",
    channel: "Channel",
    channels: "Channels",
    chaincode: "Chaincode",
    chaincodes: "Chaincodes",
    version: "Version",
    identity: "Identity", 
    connect_to: "Connect to...",
    connected: "Connected",
    refresh_connection: "Refresh connection",
    time_last_update_invalid: "The last update time is invalid.",
    no_result_error: "No result returned, unknown error.",
    status: "Status",
    payload: "Payload",
    transaction_id: "Transaction ID",
    transaction_validation_code: "Validation code",
    res_code: "Result code",
    err_message: "Error message",
    show_details: "Show details",
    close_details: "Close details",
    quick_view: "Quick view",
    previous_blocks: "Previous blocks",

    delete: "Delete",
    delete_confirmation: "Delete confirmation",
    delete_confirmation_remark: "Do you want to delete this?",

    chaincode_name: "Chaincode name",
    chaincode_version: "Chaincode version",
    chaincode_package: "Chaincode package",
    chaincode_path: "Chaincode path",
    chaincode_type: "Chaincode type",
    chaincode_install: "Install chaincode",
    chaincode_install_to: "You are going to install chaincode to peer %v",
    chaincode_install_no_result: "No chaincode install result.",
    chaincode_package_remark: "Chaincode sourcecode package, now only .tar and .tar.gz is supported. For Golang chaincode, " 
                            + "it should include full package path and starts with src folder. Please find document for examples.",
    chaincode_path_remark: "It is the Golang type chaincode package path, it can be left as blank if the Golang package path is blank. Please find document for examples.",
    chaincode_upload: "Upload chaincode package...",
    chaincode_noany: "No any chaincodes installed",
    chaincode_instantiate: "Instantiate chaincode",
    chaincode_constructor:"Chaincode constructor arguments",
    chaincode_policy:"Chaincode endorsement policy",
    chaincode_upgrade: "Upgrade chaincode",
    chaincode_constructor_remark: "Strings split by comma, example: init,a,100,b,200",
    chaincode_policy_remark: "Example: OR ('Org1MSP.peer','Org2MSP.peer')",
    chaincode_execute: "Execute chaincode",
    chaincode_execute_with: "%v chaincode %v on channel %v",
    chaincode_query: "Query chaincode",
    chaincode_function_name: "Function name",
    chaincode_arguments: "Arguments",
    chaincode_operation: "Chaincode operation",

    chaicode_status: "Chaincode status",
    chaincode_payload: "Chaincode payload",
    chaicode_peer_response: "Peer response",

    chaincode_type_golang: "Golang",
    chaincode_type_node: "Node",
    chaincode_type_java: "Java",

    channel_operation: "Channel operation",
    channel_noany: "No channel joined yet",
    channel_join: "Join a channel",
    channel_create: "Create a channel",
    channel_create_transaction_upload: "Upload transaction file (.tx) of creating channel...",
    
    block_event: "Block event",
    block_event_monitor: "Monitor",
    block_event_chart_tx: "Realtime transactions chart",

    peer:"Peer",    
    orderer:"Orderer",
    endorser: "Endorser",
    transaction: "Transaction",
    transaction_action: "Transaction action",
    transaction_number: "Transaction number",
    targets: "Targets",
    targets_auto: "Auto select if empty",
    response: "Response",
    isDelete: "Is delete",
    value: "Value",

    proposal_response: "Proposal response",
    namespace: "Namespace",
    readset: "Readset",
    writeSet: "writeSet",
    readset_of_all: "Readset %v of %v",
    writeset_of_all: "Writeset %v of %v",
    chaincode_deployed: "Chaincode deployed",
    principal: "Principal",
    rule: "Rule",

    ledger_query: "Ledger query",
    ledger_height: "Ledger height",
    ledger_currentblockhash: "Ledger current hash",
    ledger_of_channel_target: "Ledger of channel %v, with target %v",
    
    block: "Block",
    block_number: "Block number",
    block_hash: "Block hash",
    block_data_hash: "Data hash",
    block_previous_hash: "Previous hash",
    block_time: "Block time",
    block_tx_of_all_tx: "Transaction %v of all %v",
    block_action_of_all_actions: "Action %v of all %v",
    block_endorser_of_all_endorsers: "Endorser %v of all %v",
    block_query_any: "Block number, hash or transaction ID",


}

export default EN_TEXT;