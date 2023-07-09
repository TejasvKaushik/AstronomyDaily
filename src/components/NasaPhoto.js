import React from "react";
import { useState, useEffect } from "react";
import NavBar from "./NavBar";

const apiKey = process.env.REACT_APP_API_KEY;

export default function NasaPhoto() {
    const [photoData, setPhotoData] = React.useState(null);
    //an array to store 5 objects returned from the API
    const [photoDataArray, setPhotoDataArray] = React.useState([]);

    React.useEffect(() => {
        fetchPhoto();
        fetchPhotoArray();
        async function fetchPhoto() {
            const res = await fetch(
                'https://api.nasa.gov/planetary/apod?api_key=' + apiKey
            );

            const data = await res.json();
            setPhotoData(data);
        }

        async function fetchPhotoArray() {
            const res = await fetch(
                'https://api.nasa.gov/planetary/apod?api_key=' + apiKey + '&count=5'
            );

            const data = await res.json();
            setPhotoDataArray(data);
        }
    }, []);

    if (!photoData) return <div />;

    return (
        <>
            <NavBar />
            <div class="title">
                <h1 className="astronomy-title">Astronomy Photo of the Day</h1>
            </div>
            <div class="flip">
                <div class="front">
                    {photoData.media_type === "image" ? (
                        <img src={photoData.url} alt={photoData.title} />
                    ) : (
                        <iframe
                            title="space-video"
                            src={photoData.url}
                            frameBorder="0"
                            gesture="media"
                            allow="encrypted-media"
                            allowFullScreen
                            className="photo"
                        />
                    )
                    }
                    <h1>{photoData.title}</h1>
                </div>
                <div class="back explanation">
                    <p>{photoData.date}</p>
                    <p>{photoData.explanation}</p>
                    <p>© {photoData.copyright}</p>
                </div>
            </div>

            <div>
                <h1>Some more Cool Outer Space Pictures!</h1>
                {photoDataArray.map((photoData) => (
                    <div class="flip photos">
                        <div class="front">
                                {photoData.media_type === "image" ? (
                                    <img src={photoData.url} alt={photoData.title} />
                                ) : (
                                    <iframe
                                        title="space-video"
                                        src={photoData.url}
                                        frameBorder="0"
                                        gesture="media"
                                        allow="encrypted-media"
                                        allowFullScreen
                                        className="photo"
                                    />
                                )
                                }
                                <h1>{photoData.title}</h1>
                        </div>
                        <div class="back explanation">
                                <p>{photoData.date}</p>
                                <p>{photoData.explanation}</p>
                                <p>© {photoData.copyright}</p>
                        </div>
                    </div>
                ))}
        </div >
        </>
    )
}