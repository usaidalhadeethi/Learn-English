import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import CardMedia from '@mui/material/CardMedia';
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import { v4 as uuidv4 } from "uuid";
import car from '../../images/car.jpg'

// ICONS
import CheckIcon from "@mui/icons-material/Check";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import IconButton from "@mui/material/IconButton";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";

import { useContext, useState } from "react";
import { TodosContext } from "../../contexts/todosContext";

// DIALOG IMPORTS
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function Todo({ todo, handleCheck }) {
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [showUpdateDialog, setShowUpdateDialog] = useState(false);

  const [updatedTodo, setUpdatedTodo] = useState({
    // title: todo.title,
    // details: todo.details,
    word: todo.word,
    translation: todo.translation,
    sentences: todo.sentences,
    picture: todo.picture,
  });
  
  const { todos, setTodos } = useContext(TodosContext);
 
  // EVENT HANDLERS
  // function handleCheckClick() {
  //   const updatedTodos = todos.map((t) => {
  //     if (t.id == todo.id) {
  //       t.isCompleted = !t.isCompleted;
  //     }
  //     return t;
  //   });
  //   setTodos(updatedTodos);
  // }

  function handleDeleteClick() {
    setShowDeleteDialog(true);
  }

  function handleUpdateClick() {
    setShowUpdateDialog(true);
  }

  function handleDeleteDialogClose() {
    setShowDeleteDialog(false);
  }

  function handleUpdateClose() {
    setShowUpdateDialog(false);
  }

  function handleDeleteConfirm() {
    const updatedTodos = todos.filter((t) => {
      return t.id != todo.id;
    });

    setTodos(updatedTodos);
  }

  function handleUpdateConfirm() {
    const updatedTodos = todos.map((t) => {
      if (t.id == todo.id) {
        return { ...t,
            word: updatedTodo.word, 
            translation: updatedTodo.translation, 
            sentences: updatedTodo.sentences,
            picture: updatedTodo.picture,
          };
      } else {
        return t;
      }
    });

    setTodos(updatedTodos);
    setShowUpdateDialog(false);
  }
  // ====== EVENT HANDLERS ======
  return (
    <>
      {/* DELETE DIALOG */}
      <Dialog
        onClose={handleDeleteDialogClose}
        open={showDeleteDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Kartı silmek istediğinizden emin misiniz ?
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Kartı sildikten sonra geri alamayacaksınız ! 
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteDialogClose}>Kapat</Button>
          <Button autoFocus onClick={handleDeleteConfirm}>
            Evet, SİL
          </Button>
        </DialogActions>
      </Dialog>
      {/* === DELETE DIALOG === */}

      {/* UPDATE DIALOG */}
      <Dialog
        onClose={handleUpdateClose}
        open={showUpdateDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Düzeltme</DialogTitle>
        <DialogContent>
          {/* <TextField
            autoFocus
            margin="dense"
            id="name"
            label="عنوان المهمة"
            fullWidth
            variant="standard"
            value={updatedTodo.title}
            onChange={(e) => {
              setUpdatedTodo({ ...updatedTodo, title: e.target.value });
            }}
          />

          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="التفاصيل"
            fullWidth
            variant="standard"
            value={updatedTodo.details}
            onChange={(e) => {
              setUpdatedTodo({ ...updatedTodo, details: e.target.value });
            }}
          /> */}
          <TextField
            autoFocus
            margin="dense"
            id="word"
            label="English Word"
            fullWidth
            variant="standard"
            value={updatedTodo.word}
            onChange={(e) => {
              setUpdatedTodo({ ...updatedTodo, word: e.target.value });
            }}
          />

          <TextField
            autoFocus
            margin="dense"
            id="translation"
            label="Translation"
            fullWidth
            variant="standard"
            value={updatedTodo.translation}
            onChange={(e) => {
              setUpdatedTodo({ ...updatedTodo, translation: e.target.value });
            }}
          />

          <TextField
            autoFocus
            margin="dense"
            id="sentences"
            label="Sentences"
            fullWidth
            multiline
            rows={4}
            variant="standard"
            // value={updatedTodo.sentences.join("\n")}
            value={Array.isArray(updatedTodo.sentences) ? updatedTodo.sentences.join("-") : updatedTodo.sentences}
            onChange={(e) => {
              setUpdatedTodo({
                ...updatedTodo,
                sentences: e.target.value.split("-"),
              });
            }}
          />

          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files[0];
              setUpdatedTodo({ ...updatedTodo, picture: file });
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleUpdateClose}>Kapat</Button>
          <Button autoFocus onClick={handleUpdateConfirm}>
          Düzelt
          </Button>
        </DialogActions>
      </Dialog>
      {/* === UPDATE DIALOG */}
      <Card
        className="todoCard"
        sx={{
          minWidth: 240,
          background: "#283593",
          color: "white",
          marginTop: 5,
        }}
      >
        <CardContent>
          <Grid container spacing={2}>
            <Grid xs={6}>
              <Typography
                variant="h5"
                sx={{
                  backgroundColor: "#7927b1",
                  margin: "0 auto",
                  padding: "2px 8px",
                  borderRadius: "10px",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                {todo.word}
              </Typography>
            </Grid>

            <Grid xs={6}>
              <Typography variant="h5" sx={{
                  backgroundColor: "#7927b1",
                  margin: "0 auto",
                  padding: "2px 8px",
                  borderRadius: "10px",
                  color: "white",
                  fontWeight: "bold",
                }}>
                {todo.translation}
              </Typography>
            </Grid>

            <Grid xs={12}>
              <Typography variant="h5" sx={{ 
                backgroundColor: "white",
                color: "black",
                borderRadius: "10px", 
                }}>
                {todo.sentences.map((sentence, index) => (
                  <div key={index}>{sentence}</div>
                ))}
              </Typography>

              <CardMedia
                sx={{ 
                  height: 260,
                  margin: "16px 0",
                }}
                image={todo.picture ? URL.createObjectURL(new Blob([todo.picture])) : ""}                
                title="Uploaded Image"
              />
            </Grid>

            {/* ACTION BUTTONS */}
            <Grid
              xs={12}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
            
              {/* UPDATE BUTTON */}
              <IconButton
                onClick={handleUpdateClick}
                className="iconButton"
                aria-label="delete"
                style={{
                  color: "#1769aa",
                  background: "white",
                  border: "solid #1769aa 3px",
                  margin: "0 8px",
                }}
              >
                <ModeEditOutlineOutlinedIcon />
              </IconButton>
              {/*== UPDATE BUTTON ==*/}

              {/* DELETE BUTTON */}
              <IconButton
                className="iconButton"
                aria-label="delete"
                style={{
                  color: "#b23c17",
                  background: "white",
                  border: "solid #b23c17 3px",
                  margin: "0 8px",
                }}
                onClick={handleDeleteClick}
              >
                <DeleteOutlineOutlinedIcon />
              </IconButton>
              {/*=== DELETE BUTTON ===*/}
            </Grid>
            {/*== ACTION BUTTONS ==*/}
          </Grid>
        </CardContent>
      </Card>
      
    </>
  );
  
}


