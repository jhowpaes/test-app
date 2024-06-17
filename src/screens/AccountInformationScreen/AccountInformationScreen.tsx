import React from "react";
import {
  Box,
  Button,
  FormPasswordTextInput,
  FormTextInput,
  Screen,
} from "@components";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AccountSchema, accountSchema } from "./accountInformation";

export function AccountInformationScreen() {
  const { control, formState, handleSubmit } = useForm<AccountSchema>({
    resolver: zodResolver(accountSchema),
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  function submitForm(form: AccountSchema) {
    console.log(form);
  }

  return (
    <Screen header={{ title: "Edit Information", canGoBack: true }}>
      <Box marginHorizontal="s24" mt="s40">
        <FormTextInput
          control={control}
          name="name"
          rules={{ required: "Nome obrigatório" }}
          placeholder="FULL NAME"
          boxProps={{ mb: "s16" }}
        />
        <FormTextInput
          control={control}
          autoCapitalize="none"
          name="email"
          keyboardType="email-address"
          rules={{ required: "E-mail obrigatório" }}
          placeholder="EMAIL"
          boxProps={{ mb: "s16" }}
        />

        <FormPasswordTextInput
          control={control}
          name="password"
          rules={{ required: "Senha obrigatória" }}
          placeholder="PASSWORD"
          boxProps={{ mb: "s16" }}
        />

        <Button
          onPress={handleSubmit(submitForm)}
          disabled={formState.isValid}
          title="SAVE CHANGES"
        />
      </Box>
    </Screen>
  );
}
