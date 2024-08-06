
import { CustomButton, FormField } from '../../components'
import { View, Text, ScrollView } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { Link, router } from "expo-router";


function register() {

    const [isSubmitting, setSubmitting] = useState(false);
    const [form, setForm] = useState({
        email: "",
        password: "",
        confirm_password:""
    })

    const submit = async () => {
        console.log('login form', form)
    }
    return (
        <SafeAreaView>
            <ScrollView>
                <View>
                    <Text>
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


                    <FormField
                        title="Confirm Password"
                        value={form.confirm_password}
                        handleChangeText={(e) => setForm({ ...form, confirm_password: e })}
                        otherStyles="mt-7"
                        placeholder="confirm your password"
                    />

                    <CustomButton
                        title="Register"
                        handlePress={submit}
                        containerStyles="mt-7"
                        isLoading={isSubmitting}
                    />
                </View>

                <View className="flex justify-center pt-5 flex-row gap-2">
                    <Text className="text-lg text-gray-100 font-pregular">
                        already have an account?
                    </Text>
                    <Link
                        href="/login"
                        className="text-lg font-psemibold text-secondary"
                    >
                        Login
                    </Link>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default register