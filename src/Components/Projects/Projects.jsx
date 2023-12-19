import React from 'react'
import ProjectCards from '../ProjectCards/ProjectCards'
import './Projects.css'
const Projects = () => {
    return (
    <div className= "Projects" id = 'Projects'>
        <div className = "Head">
            <span>Projects</span>
        </div>
        <div className = "projectlist">
            <ul style = {{listStyleType: 'none'}}>
                <li>
                    <ProjectCards
                    title = {'Brain Flow Friend'}
                    description={"Full-stack web application that uses an EEG headband to help students learn material better. While wearing the headband, the user is shown a personalized selection of videos based on the user's interest."}
                    languages={"Python Flask, Javascript, HTML, CSS"}
                    />
                </li>
                <li>
                    <ProjectCards
                    title = {'UNIX Shell'}
                    description={"Designed a UNIX shell from scratch using C/C++. Program accepts commands from the user and executes each command in a seperate process. Includes features such as tracking command history, redirecting input & output, and communication via a pipe."}
                    languages={"C/C++"}
                    />
                </li>
                <li>
                    <ProjectCards
                    title = {'AI Music Generator'}
                    description={"Implemented a program that utilized the genetic algorithm to generate the best song using music theory concepts like chord progressions, pitch range, smoothness of transitions, and repitition"}
                    languages={"C++"}
                    />
                </li>
                <li>
                    <ProjectCards
                    title = {'Pathfinding Program'}
                    description={"Designed and implemented a pathfinding algorithm that calculates the shortest route on a graph. Leveraged Dijkstra’s algorithm along with BFS, queues, and heaps to optimize pathfinding"}
                    languages={"C++"}
                    />
                </li>
            </ul>
        </div>
    </div>
    )
}

export default Projects