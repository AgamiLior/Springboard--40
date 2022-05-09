import React, { useState }  from "react";
import MadLibForm from './MadLibForm';
import Story from './Story';
import { v4 as uuid } from 'uuid';

function MadLib() {
	const INITIAL_STATE = [];
	const [story, setStory] = useState(INITIAL_STATE);
	const [showStory, setShowStory] = useState(false);
	const createStory = (newStory) => {
		setStory((data) => [...data, { ...newStory, id:uuid() }]);
	};
	return (
		<div className="MadLib" >
			<h1>MadLib</h1>
			{showStory ? (
				<Story
						setShowStory={setShowStory}
						setStory={setStory}
						story={story[0]}
					/>
			) : (
				<MadLibForm setShowStory={setShowStory} createStory={createStory} />
			)}
		</div>
	);

}


export default MadLib;
