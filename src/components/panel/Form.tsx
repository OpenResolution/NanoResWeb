import { ControllerProps, Controller, FieldValues } from "react-hook-form";
import { Listbox, Combobox } from "@headlessui/react";
import { SMLMTaskForm } from "../api/forms";
import { ChangeEvent, HTMLAttributes } from "react";

function SMLMFormButtonGroup() {
  return (
    <div className="p-4 rounded-b-lg flex justify-end">
      <button
        className="text-gray-900 rounded-md px-[0.5em] py-[0.25em] bg-gray-50 hover:bg-gray-300"
        type="submit"
      >
        Submit
      </button>
    </div>
  );
}

const InputClassName = "w-full cursor-default rounded-lg bg-white h-10 pl-4 pr-4 text-gray-900 text-left shadow-md";

interface SMLMFormInputProps {
  name: string;
  register: () => React.ComponentProps<"input">;
}

function SMLMFormInput(props: SMLMFormInputProps) {
  return (
    <>
      <div className="col-start-1 col-span-1 flex justify-end items-center text-gray-900 pr-4 m-2">
        {props.name}
      </div>
      <div className="relative col-start-2 col-span-3 m-2">
        <input
          className={InputClassName}
          {...props.register()}
        />
      </div>
    </>
  );
}

type ControllerPropsWithoutRender<T extends FieldValues> = Omit<ControllerProps<T>, "render">;

interface SMLMFormControlledComboBoxProps<T extends FieldValues>
  extends ControllerPropsWithoutRender<T> {
  inputDisplayValue?: (input: string) => string;
  inputOnChange?: (event : ChangeEvent<HTMLInputElement>) => void;
  optionDisplayValue?: (option : string) => string;
  options: string[] | undefined;
}

function SMLMFormControlledComboBox<T extends FieldValues>(
  props: SMLMFormControlledComboBoxProps<T>
) {
  const { inputDisplayValue, inputOnChange, options, optionDisplayValue, ...controllerProps } = props;
  return (<>
        <Controller
        {...controllerProps}
        render={({ field }) => (
          <Combobox value={field.value} onChange={field.onChange}>
            <div className="col-start-1 col-span-1 flex justify-end items-center text-gray-900 pr-4 m-2">
              Input:
            </div>
            <div className="relative col-start-2 col-span-3 m-2">
              <Combobox.Input
                className={InputClassName}
                displayValue={inputDisplayValue}
                onChange={inputOnChange}
              />
              <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5">
                {options && options.map((option) => (
                    <Combobox.Option
                      key={option}
                      value={option}
                      className="z-50 relative cursor-default select-none py-2 pl-10 pr-4 text-gray-900 ui-active:bg-gray-300 ui-not-active:bg-gray-50"
                    >
                      <span className="block truncate">{optionDisplayValue ? optionDisplayValue(option) : option}</span>
                    </Combobox.Option>
                  ))}
              </Combobox.Options>
            </div>
          </Combobox>
        )}
      />
  </>);
}

interface SMLMFormControlledListBoxProps<T extends FieldValues>
  extends ControllerPropsWithoutRender<T> {
  options: string[] | undefined;
}

function SMLMFormControlledListBox<T extends FieldValues>(
  props: SMLMFormControlledListBoxProps<T>
) {
  const { options, ...controllerProps } = props;
  return (
    <>
      <Controller
        {...controllerProps}
        render={({ field }) => (
          <Listbox value={field.value} onChange={field.onChange}>
            <div className="col-start-1 col-span-1 flex justify-end items-center text-gray-900 pr-4 m-2">
              type:
            </div>
            <div className="relative col-start-2 col-span-3 m-2">
              <Listbox.Button className={InputClassName}>
                {field.value}
              </Listbox.Button>
              <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5">
                {options && options.map((option) => (
                  <Listbox.Option
                    key={option}
                    className="relative cursor-default select-none py-2 pl-10 pr-4 text-gray-900 ui-active:bg-gray-300 ui-not-active:bg-gray-50"
                    value={option}
                  >
                    <span className="block truncate">{option}</span>
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </div>
          </Listbox>
        )}
      />
    </>
  );
}

function SMLMForm(props: React.ComponentProps<"form">) {
  return (
    <form {...props} className={" min-h-[50vh] flex flex-col justify-between"}
    onSubmit={data => {console.log(data); props.onSubmit && props.onSubmit(data);}}>
      <div className="grid grid-cols-4 p-8">{props.children}</div>
      <SMLMFormButtonGroup />
    </form>
  );
}

export { SMLMForm, SMLMFormInput, SMLMFormControlledListBox, SMLMFormControlledComboBox};
