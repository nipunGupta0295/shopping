import React, { useState } from 'react'
import { TextInput, View, Button } from 'react-native';
function Login(props) {
    const [email, setEmail] = useState("");
    validateEmail = (email) => {
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };

    const handleSubmit = () => {
        if(validateEmail(email)) {
            props.navigation.navigate("Home")
        }else {
            console.log("error");
        }
    }

    return (
        <View>
            <TextInput
                onChangeText={setEmail}
                placeholder={"Enter a valid email"}

            />
            <Button title="Submit" onPress={handleSubmit} />
        </View>
    )
}

export default Login
