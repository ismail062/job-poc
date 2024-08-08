
import { CustomButton, FormField } from '../../components'
import { View, Text, ScrollView, Alert } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { Link } from "expo-router";



function login() {

    const [isSubmitting, setSubmitting] = useState(false);
    const [form, setForm] = useState({
        email: "",
        password: ""
    })

    const submit = async () => {
        if(form.email === "" || form.password === "") {
            Alert.alert('Error', "Please fill in all fields"); 
        }
        setSubmitting(true); 
        try {
            console.log(...form);
            setSubmitting (false);
            window.href('/')
        } catch (error) {
            Alert.alert('Error', error.message);
        } finally {
            setSubmitting(false);
        } 
    }

    return (
        <SafeAreaView>
            <ScrollView>
                <View>
                    <Text className="bg-primary h-full">
                        Welcome to Job Portal
                    </Text>

                    <FormField
                        title="Email"
                        value={form.email}
                        handleChangeText={(e) => setForm({ ...form, email: e })}
                        otherStyles="mt-7"
                        keyboardType="email-address"
                        placeholder="enter your email"
                    />

                    <FormField
                        title="Password"
                        value={form.password}
                        handleChangeText={(e) => setForm({ ...form, password: e })}
                        otherStyles="mt-7"
                        placeholder="enter your password"
                    />

                    <CustomButton
                        title="Login"
                        handlePress={submit}
                        containerStyles="mt-7"
                        isLoading={isSubmitting}
                    />
                </View>

                <View className="flex justify-center pt-5 flex-row gap-2">
                    <Text className="text-lg text-gray-100 font-pregular">
                        Don't have an account?
                    </Text>
                    <Link
                        href="/register"
                        className="text-lg font-psemibold text-secondary"
                    >
                        Register
                    </Link>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default login