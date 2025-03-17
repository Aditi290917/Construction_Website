// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const ProjectCards = () => {
//     const projects = [
//         {
//             title: 'Terrace Waterproffing',
//             description: 'Residential | Renovation',
//             image: 'terraceWaterProffing.jpg',
//         },
//         {
//             title: 'Crack Filling Waterproffing',
//             description: 'Residential | New Build',
//             image: 'CrackFellingWaterproffing.jpg',
//         },
//         {
//             title: 'Rubber Coat Waterproofing',
//             description: 'Residential | New Build',
//             image: 'rubbercoatwaterproofing.jpg',
//         },
//     ];

//     return (
//         <div className="d-flex justify-content-center gap-4  p-4">
//             {projects.map((project, index) => (
//                 <div 
//                     key={index} 
//                     className="position-relative card border-0 overflow-hidden" 
//                     style={{ width: '20rem' }}
//                     onMouseEnter={(e) => {
//                         const cardBody = e.currentTarget.querySelector('.card-body');
//                         cardBody.style.height = '6rem';
//                         cardBody.querySelector('button').style.opacity = '1';
//                     }}
//                     onMouseLeave={(e) => {
//                         const cardBody = e.currentTarget.querySelector('.card-body');
//                         cardBody.style.height = '3rem';
//                         cardBody.querySelector('button').style.opacity = '0';
//                     }}
//                 >
//                     <img 
//                         src={project.image} 
//                         alt={project.title} 
//                         className="card-img-top rounded shadow"
//                         style={{ height: '20rem', objectFit: 'cover' }}
//                     />
//                     <div 
//                         className="card-body position-absolute bottom-0 start-0 w-100 bg-light p-2 d-flex flex-column align-items-center" 
//                         style={{ height: '6rem', backgroundColor: '#f8f9fa', transition: 'height 0.3s ease' }}
//                     >
//                         <h5 className="text-dark mb-2 text-center">{project.title}</h5>
//                         <button 
//                             className="btn btn-light border-dark" 
//                             style={{ transition: 'opacity 0.3s ease', opacity: '0', backgroundColor: 'white', border: '1px solid black' }}
//                         >
//                             View Project
//                         </button>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default ProjectCards;

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Carousel, Button } from 'react-bootstrap';

const ProjectCards = () => {
    const projects = [
        {
            title: 'Terrace Waterproofing',
            description: 'Residential | Renovation',
            image: 'terraceWaterProffing.jpg',
            gallery: [
                'terrace_gallery1.jpg',
                'terrace_gallery2.jpg',
                'terrace_gallery3.jpg',
                'terrace_gallery4.jpg',
                'terrace_gallery5.jpg',
                'terrace_gallery6.jpg',
                'terrace_gallery7.jpg',
                'terrace_gallery8.jpg',
                
            ],
        },
        {
            title: 'Crack Filling Waterproofing',
            description: 'Residential | New Build',
            image: 'CrackFellingWaterproffing.jpg',
            gallery: [
                'crack_gallery1.jpg',
                'crack_gallery2.jpg',
                'crack_gallery3.jpg',
            ],
        },
        {
            title: 'Rubber Coat Waterproofing',
            description: 'Residential | New Build',
            image: 'rubberCoatWaterProofing.jpg',
            gallery: [
                'rubber_gallery1.jpg',
                'rubber_gallery2.jpg',
                'rubber_gallery3.jpg',
            ],
        },
        {
            title: 'Core Pipe Waterproofing',
            description: 'Residential | Renovation',
            image: 'CorePipeWaterproffing.jpg',
            gallery: [
                'CorePipeWaterproffing1.jpg',
                'CorePipeWaterproffing2.jpg',
                'CorePipeWaterproffing3.jpg',
                'CorePipeWaterproffing4.jpg',
            ],
        },
        {
            title: 'Brick Bat Waterproofing',
            description: 'Residential | Maintenance',
            image: 'BrickBatWaterproofing.jpg',
            gallery: [ 
                'BrickBatWaterproofing_gallery1.jpg',
                'BrickBatWaterproofing_gallery2.jpg',
                'BrickBatWaterproofing_gallery3.jpg',
                'BrickBatWaterproofing_gallery4.jpg',
            ],
        },
        {
            title: 'Basement Waterproofing',
            description: 'Residential | Protection',
            image: 'BasementWaterproffing.jpg',
            gallery: [
                'basement_gallery1.jpg',
                'basement_gallery2.jpg',
                'basement_gallery3.jpg',
            ],
        },
    ];

    const [showModal, setShowModal] = useState(false);
    const [activeProject, setActiveProject] = useState(null);

    const handleShow = (project) => {
        setActiveProject(project);
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
        setActiveProject(null);
    };

    return (
        <>
            {/* Page Title */}
            <h1 className="text-center my-4">Projects</h1>

            {/* Project Cards */}
            <div className="d-flex justify-content-center flex-wrap gap-4 p-4">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="position-relative card border-0 overflow-hidden"
                        style={{ width: '20rem' }}
                        onMouseEnter={(e) => {
                            const cardBody = e.currentTarget.querySelector('.card-body');
                            cardBody.style.height = '8rem';
                            cardBody.querySelector('button').style.opacity = '1';
                        }}
                        onMouseLeave={(e) => {
                            const cardBody = e.currentTarget.querySelector('.card-body');
                            cardBody.style.height = '4rem';
                            cardBody.querySelector('button').style.opacity = '0';
                        }}
                    >
                        <img
                            src={project.image}
                            alt={project.title}
                            className="card-img-top rounded shadow"
                            style={{ height: '20rem', objectFit: 'cover' }}
                        />
                        <div
                            className="card-body position-absolute bottom-0 start-0 w-100 bg-light p-2 d-flex flex-column align-items-center"
                            style={{
                                height: '4rem',
                                backgroundColor: '#f8f9fa',
                                transition: 'height 0.3s ease',
                            }}
                        >
                            <h5 className="text-dark mb-1 text-center">{project.title}</h5>
                            <p className="text-muted mb-2 small text-center">{project.description}</p>
                            <button
                                className="btn btn-light border-dark"
                                style={{
                                    transition: 'opacity 0.3s ease',
                                    opacity: '0',
                                    backgroundColor: 'white',
                                    border: '1px solid black',
                                }}
                                onClick={() => handleShow(project)}
                            >
                                View Project
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal for Gallery */}
            {activeProject && (
                <Modal show={showModal} onHide={handleClose} size="xl" centered>
                    <Modal.Header closeButton>
                        <Modal.Title>{activeProject.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <Carousel interval={3000} indicators={true} pause={false}>
    {activeProject.gallery.map((image, idx) => (
        <Carousel.Item key={idx}>
            <img
                src={image}
                alt={`Slide ${idx}`}
                className="d-block w-100"
                style={{ height: '600px', objectFit: 'cover' }}
            />
        </Carousel.Item>
    ))}
</Carousel>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            )}
        </>
    );
};

export default ProjectCards;
