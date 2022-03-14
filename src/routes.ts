import { Request, Response } from "express";
import CreateCourseService from "./CreateCourseService";

export function createCourse(request: Request, response: Response) {
  CreateCourseService.execute({
    name: "Node",
    educator: "Bruno",
    duration: 20,
  });

  CreateCourseService.execute({
    name: "Node",
    educator: "Bruno",
  });

  return response.send();
}
