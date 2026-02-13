import { Alert, Button, Grid, Snackbar, TextField } from "@mui/material";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { IMaskInput } from "react-imask";

interface CustomProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
  mask: string;
}

const TextMaskCustom = React.forwardRef<HTMLInputElement, CustomProps>(function TextMaskCustom(props, ref) {
  const { onChange, ...other } = props;
  return (
    <IMaskInput
      {...other}
      mask={other.mask}
      // definitions={{
      //   "#": /[1-9]/,
      // }}
      inputRef={ref}
      onAccept={(value: any) => onChange({ target: { name: props.name, value } })}
      overwrite
    />
  );
});

export type FormFields = Record<string, IFormField>;

export interface IFormField {
  label: string;
  value: string;
  mask?: string;
  pattern?: string;
  required: boolean;
}

type ContactFormFields<T extends string> = Record<T, string>;

export function ContactForm(props: { formFields: FormFields }) {
  const [open, setOpen] = React.useState(false);
  const defaultValue = Object.keys(props.formFields).reduce<ContactFormFields<keyof typeof props.formFields>>((res, cur) => {
    res[cur] = "";
    return res;
  }, {});

  const { control, handleSubmit, formState, reset } = useForm<ContactFormFields<keyof typeof props.formFields>>({
    defaultValues: defaultValue,
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const onSubmit = async (data: ContactFormFields<keyof typeof props.formFields>) => {
    const message = Object.keys(data)
      .map((key) => {
        return `${props.formFields[key as keyof typeof props.formFields].label}: ${data[key as keyof typeof props.formFields] || "-"}`;
      })
      .join(", ");
    console.log(message);
    const res = await fetch("/api/order/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message }),
    });
    setOpen(true);
    reset(defaultValue);
  };

  return (
    <form onSubmit={handleSubmit((data) => onSubmit(data))} noValidate>
      <Grid container spacing={1} columns={12}>
        {Object.keys(props.formFields).map((key, index) => {
          const currentKey = key as keyof typeof props.formFields;
          const currenField = props.formFields[currentKey];
          return (
            <Grid item sm={6} xs={12} md={3} key={index}>
              <Controller
                control={control}
                name={currentKey}
                rules={{
                  required: currenField.required,
                  pattern: currenField.pattern ? new RegExp(currenField.pattern) : undefined,
                }}
                render={({ field: { onChange, onBlur, value, ref }, fieldState: { invalid, error } }) => (
                  <TextField
                    {...currenField}
                    error={invalid}
                    fullWidth
                    id={currentKey}
                    InputProps={currenField.mask ? { inputComponent: TextMaskCustom as any, inputProps: { mask: currenField.mask } } : undefined}
                    label={currenField.label}
                    name={currentKey}
                    onChange={onChange}
                    size="small"
                    value={value}
                    variant="outlined"
                  />
                )}
              />
            </Grid>
          );
        })}
        <Grid item sm={6} xs={12} md={3}>
          <Button disabled={!formState.isValid && formState.isSubmitted} fullWidth={true} variant="contained" type="submit">
            Отправить заявку
          </Button>
        </Grid>
      </Grid>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        open={open}
        autoHideDuration={2000}
        onClose={() => {
          setOpen(false);
        }}
      >
        <Alert severity="success" variant="filled" sx={{ width: "100%" }}>
          Сообщение отправлено!
        </Alert>
      </Snackbar>
    </form>
  );
}
