import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import Detail from "../components/Detail";
import SimilarExercises from "../components/SimilarExercises";
import ExerciseVideo from "../components/ExerciseVideo";
import { youtubeOptions, fetchData } from "../utils/fetchData";

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const fetchExercise = async () => {
      try {
        const youtubeSearchUrl =
          "https://youtube-search-and-download.p.rapidapi.com";
        const exerciseResponse = await fetch(`/api/${id}`);
        const exerciseData = await exerciseResponse.json();
        setExerciseDetail(exerciseData);

        const exerciseVideosData = await fetchData(
          `${youtubeSearchUrl}/search?query=${exerciseData.name} exercise`,
          youtubeOptions
        );
        setExerciseVideos(exerciseVideosData.contents);

        const apiBaseUrl = "/api";

        const targetMuscleResponse = await fetch(
          `${apiBaseUrl}/target/${exerciseData.target}`
        );
        const targetMuscleData = await targetMuscleResponse.json();

        setTargetMuscleExercises(targetMuscleData);
 
        const equipmentResponse = await fetch(
          `${apiBaseUrl}/equipment/${exerciseData.equipment}`
        );
        const equipmentData = await equipmentResponse.json();

        setEquipmentExercises(equipmentData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchExercise();
  }, [id]);
  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideo
        exerciseVideos={exerciseVideos}
        name={exerciseDetail.name}
      />
      <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises} />
    </Box>
  );
};

export default ExerciseDetail;
