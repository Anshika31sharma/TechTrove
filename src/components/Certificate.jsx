import React from 'react';
import Card from './Card';
import { Code, Link } from './Icons';
import CardCover from './CardCover';

const Project = ({ project: { img, demo, code, description, title, subtitle, style = { shadow: "shadow-gray-500", cover: "from-gray-500" } } }) => {
    return (
        <Card style={style}>
            <div className="group relative rounded-md cursor-pointer">
                <img src={img} alt="Projec-Image" width="100%" loading='lazy' title="Project" className='rounded-t-md h-80' />
                <CardCover text={description} style={style} />
            </div>
            <div className='flex flex-col items-center rounded-b-md p-4'>
                <div className="text-white font-bold text-xl mb-2">{title}</div>
                {subtitle && <div className="text-gray-300 text-lg mb-2">{subtitle}</div>}
                <div className='flex justify-center items-center'>
                    <ProjectsLink name="Link" style={"rounded-bl-lg " + style.cover} link={code} />
                </div>
            </div>
        </Card>
    );
}

export default Project;


const ProjectsLink = ({ name, link, style }) => {
    return (
        <a href={link} target="_blank" rel="noreferrer"
            className={` w-64 py-3 text-center  text-xl bg-black hover:bg-gradient-to-t cursor-pointer ${style} to-black duration-500 flex justify-center items-center text-white`}>
            {name === "Code" ? <Code /> : <Link />} <span className='pl-2'>{name}</span>
        </a>
    )
}

