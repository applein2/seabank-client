import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { lists } from "../../data/Data";

export default function MediaCard() {
  return (
    <div className="content grid3 mtop">
      {lists.map((list) => (
        <Card key={list.id}>
          <a
            href={list.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={list.cover}
                alt="media"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  component="div"
                  sx={{ fontSize: "20px", fontWeight: "bold" }}
                >
                  {list.title}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {list.source} {list.date}
                </Typography>
              </CardContent>
            </CardActionArea>
          </a>
        </Card>
      ))}
    </div>
  );
}
