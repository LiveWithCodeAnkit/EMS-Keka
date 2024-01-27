import React, { useEffect, useMemo } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, useFieldArray } from "react-hook-form";
import { Box, Button } from "@chakra-ui/react";
import { useTimesheet } from "../hook";
import { projectTask, projectsInfo } from "../constants";
import { TextareaControl } from "@atoms/Textarea";
import { InputNumberControl } from "@atoms/TextInput";
import { SelectControl, SelectInputControl } from "@atoms/Select";

interface Project {
  project: string;
  projectSubTask: string;
  description: string;
  workingTime: number;
}

interface FormData {
  projects: Project[];
}

const AddTimesheet = ({ onClose }: { onClose: () => void }) => {
  const { schema, submit } = useTimesheet({
    onClose,
  });

  const { handleSubmit, control, formState } = useForm<any>({
    resolver: yupResolver(schema),
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "projects",
  });

  const { errors } = formState;

  const handleAddProject = () => {
    append({
      project: "",
      projectSubTask: "",
      description: "",
      workingTime: 0,
    });
  };
  const lastProjectIndex = fields.length - 1;

  const calculateTotalWorkingTime = () => {
    const total = fields.reduce(
      // @ts-ignore
      (acc, item) => acc + Number(item.workingTime),
      0
    );
    return parseFloat(total.toFixed(2));
  };

  const totalWorkingTime = useMemo(() => calculateTotalWorkingTime(), [fields]);

  const handleRemoveProject = (index: number) => {
    remove(index);
  };

  useEffect(() => {
    if (fields.length === 0) {
      append({
        project: "",
        projectSubTask: "",
        description: "",
        workingTime: 1.0,
      });
    }
  }, [fields, append]);

  return (
    <form onSubmit={handleSubmit(submit)}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          gap: "2rem",
        }}
      >
        {fields.map((project, index) => (
          <Box key={project.id || index}>
            <Box w="60%">
              <SelectControl
                label={`Select Project`}
                name={`projects[${index}].project`}
                control={control}
                defaultValue={""}
                errors={errors}
                options={projectsInfo.map((data) => ({
                  value: data.projectName,
                  label: data.projectName,
                }))}
              />
            </Box>
            <Box w="60%">
              <SelectInputControl
                label=""
                name={`projects[${index}].projectSubTask`}
                control={control}
                initialValues=""
                errors={errors}
                existingOptions={projectTask.map((task) => task.taskName)}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                gap: "2rem",
              }}
            >
              <TextareaControl
                label=""
                name={`projects[${index}].description`}
                control={control}
                defaultValue={""}
                errors={errors}
                placeholder="Describe your work for the project"
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "start",
                  gap: "0.5rem",
                }}
              >
                <InputNumberControl
                  label=""
                  initialValues=""
                  control={control}
                  name={`projects[${index}].workingTime`}
                  errors={errors}
                  min={1.0}
                  max={12.0}
                  step={0.1}
                />

                {index === lastProjectIndex ? (
                  <Button
                    type="button"
                    onClick={() => handleAddProject()}
                    colorScheme="twitter"
                    isDisabled={!formState.isValid}
                  >
                    Add
                  </Button>
                ) : (
                  <Button
                    type="button"
                    onClick={() => handleRemoveProject(index)}
                    colorScheme="red"
                  >
                    Remove
                  </Button>
                )}
              </Box>
            </Box>
          </Box>
        ))}
        <Box
          sx={{
            display: "flex",
            justifyContent: "end",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
            }}
          >
            <Button isActive>Total Working Time: {totalWorkingTime} / 8</Button>
            <Button colorScheme="blue" type="submit">
              Submit
            </Button>
          </Box>
        </Box>
      </Box>
    </form>
  );
};

export default AddTimesheet;
