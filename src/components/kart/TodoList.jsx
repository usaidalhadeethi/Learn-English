import * as React from "react";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Grid from "@mui/material/Unstable_Grid2";
import TextField from "@mui/material/TextField";
import { v4 as uuidv4 } from "uuid";

// ICONS
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";

// Components
import Todo from "./Todo";

// OTHERS
import { TodosContext } from "../../contexts/todosContext";
import { useContext, useState } from "react";

// export default function TodoList() {
//   const { todos, setTodos } = useContext(TodosContext);

//   const [titleInput, setTitleInput] = useState("");
//   const [displayedTodosType, setDisplayedTodosType] = useState("all");

//   // filteration arrays
//   // const completedTodos = todos.filter((t) => {
//   //   return t.isCompleted;
//   // });

//   // const notCompletedTodos = todos.filter((t) => {
//   //   return !t.spleted;
//   // });

//   let todosToBeRendered = todos;

//   // if (displayedTodosType == "completed") {
//   //   todosToBeRendered = completedTodos;
//   // } else if (displayedTodosType == "non-completed") {
//   //   todosToBeRendered = notCompletedTodos;
//   // } else {
//   //   todosToBeRendered = todos;
//   // }

//   const todosJsx = todosToBeRendered.map((t) => {
//     return <Todo key={t.id} todo={t} />;
//   });


//   function changeDisplayedType(e) {
//     setDisplayedTodosType(e.target.value);
//   }
//   function handleAddClick() {
//     const newTodo = {
//       id: uuidv4(),
//       // title: titleInput,
//       // details: "",
//       word: "",
//       translation: "",
//       sentences: "",
//       picture: "",
//     };

//     const updatedTodos = [...todos, newTodo];
//     setTodos(updatedTodos);
//     setTitleInput("");
//   }

//   return (
//     <Container maxWidth="sm">
//       <Card
//         sx={{ minWidth: 275 }}
//         style={{
//           maxHeight: "80vh",
//           overflow: "scroll",
//         }}
//       >
//         <CardContent>
//           <Typography variant="h3" style={{ fontWeight: "bold" }}>
//             Kelimelerim
//           </Typography>
//           <Divider />

//           {/* FILTER BUTTONS */}
//             {/* <ToggleButtonGroup
//               style={{ direction: "ltr", marginTop: "30px" }}
//               value={displayedTodosType}
//               exclusive
//               onChange={changeDisplayedType}
//               aria-label="text alignment"
//               color="primary"
//             > */}
//             {/* <ToggleButton value="non-completed">غير المنجز</ToggleButton>
//             <ToggleButton value="completed">المنجز</ToggleButton> */}
//             {/* <ToggleButton value="all">الكل</ToggleButton> */}
//           {/* </ToggleButtonGroup> */}
//           {/* ==== FILTER BUTTON ==== */}

//           {/* ALL TODOS */}
//           {todosJsx}
//           {/* === ALL TODOS === */}

//           {/* INPUT + ADD BUTTON */}
//           <Grid container style={{ marginTop: "20px" }} spacing={2}>
//             <Grid
//               xs={8}
//               display="flex"
//               justifyContent="space-around"
//               alignItems="center"
//             >
//               <TextField
//                 style={{ width: "100%" }}
//                 id="outlined-basic"
//                 label="عنوان المهمة"
//                 variant="outlined"
//                 value={titleInput}
//                 onChange={(e) => {
//                   setTitleInput(e.target.value);
//                 }}
//               />
//             </Grid>

//             <Grid
//               xs={4}
//               display="flex"
//               justifyContent="space-around"
//               alignItems="center"
//             >
//               <Button
//                 style={{ width: "100%", height: "100%" }}
//                 variant="contained"
//                 onClick={() => {
//                   handleAddClick();
//                 }}
//                 disabled={titleInput.length == 0}
//               >
//                 Ekle
//               </Button>
//             </Grid>
//           </Grid>
//           {/*== INPUT + ADD BUTTON ==*/}
//         </CardContent>
//       </Card>
//     </Container>
//   );
// }



export default function TodoList() {
  const { todos, setTodos } = useContext(TodosContext);

  // State variables for input fields
  const [addingTodo, setAddingTodo] = useState(false);
  const [wordInput, setWordInput] = useState("");
  const [translationInput, setTranslationInput] = useState("");
  const [sentencesInput, setSentencesInput] = useState("");
  const [pictureInput, setPictureInput] = useState(null);

  // Handler for toggling adding a new todo
  const toggleAddingTodo = () => {
    setAddingTodo(!addingTodo);
  };

  const todosJsx = todos.map((t) => {
        return <Todo key={t.id} todo={t} />;
      });

  // Handler for adding a new todo
  const handleAddClick = () => {
    const newTodo = {
      id: uuidv4(),
      word: wordInput,
      translation: translationInput,
      sentences: sentencesInput,
      picture: pictureInput,
    };

    const updatedTodos = [...todos, newTodo];
    setTodos(updatedTodos);

    // Clear input fields after adding
    setWordInput("");
    setTranslationInput("");
    setSentencesInput("");
    setPictureInput(null);

    // Toggle adding todo state back to false
    toggleAddingTodo();
  };

  const handleCancelClick = () => {
    // Clear input fields
    setWordInput("");
    setTranslationInput("");
    setSentencesInput("");
    setPictureInput(null);

    // Toggle adding todo state back to false
    toggleAddingTodo();
  };

  return (
    <Container maxWidth="sm">
      <Card
        sx={{ minWidth: 275 }}
        style={{
          maxHeight: "94vh",
          overflow: "scroll",
          backgroundColor: "#e3e3e3",
          marginTop: "3vh",
        }}
      >
        <CardContent>
          <Typography variant="h3" style={{ fontWeight: "bold" }}>
            Kelimelerim
          </Typography>
          <Divider style={{marginBottom: "-9px",}}/>
          {todosJsx}
          {/* Show input fields only when adding a new todo */}
          {addingTodo && (
            <>
              {/* English Word */}
              <TextField
                style={{ 
                  width: "100%",
                  margin: "10px 0 5px",
                  backgroundColor: "white",
                }}
                id="word"
                label="İngilizce kelimesi"
                variant="outlined"
                value={wordInput}
                onChange={(e) => setWordInput(e.target.value)}
              />

              {/* Translation */}
              <TextField
                style={{ 
                  width: "100%",
                  margin: "5px 0",
                  backgroundColor: "white",
                }}
                id="translation"
                label="Türkçe karşılığı"
                variant="outlined"
                value={translationInput}
                onChange={(e) => setTranslationInput(e.target.value)}
              />

              {/* Sentences */}
              
              <TextField
                style={{ 
                  width: "100%",
                  backgroundColor: "white",
                }}
                id="sentences"
                label="Cümle / Cümleler (- işaretiyle ayırınız)"
                variant="outlined"
                value={Array.isArray(sentencesInput) ? sentencesInput.join("-") : sentencesInput}
                onChange={(e) => setSentencesInput(e.target.value.split("-"))}
              />

              {/* Picture */}
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setPictureInput(e.target.files[0])}
              />

              {/* Add and Cancel buttons */}
              <Button
                style={{ marginTop: "10px", marginRight: "10px" }}
                variant="contained"
                onClick={handleAddClick}
                disabled={
                  !wordInput ||
                  !translationInput ||
                  !sentencesInput ||
                  !pictureInput
                }
              >
                Ekle
              </Button>
              <Button
                style={{ marginTop: "10px" }}
                variant="contained"
                onClick={handleCancelClick}
              >
                İptal et
              </Button>
            </>
          )}

          {/* Button to toggle adding todo state */}
          {!addingTodo && (
            <Button
              style={{ marginTop: "20px" }}
              variant="contained"
              onClick={toggleAddingTodo}
            >
              YENİ KART EKLE
            </Button>
          )}
        </CardContent>
      </Card>
    </Container>
  );
}
