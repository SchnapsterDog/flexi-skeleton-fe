export default {
    setData(state, data) {
        state.inputData = data;
    },
    updateBurger: (state) => {
        state.isNavOpen = !state.isNavOpen;
    },
    updateData: (state, response) => {
        let top = [
            response.data.syllables,
            response.data.words,
            response.data.sentences,
            response.data.readingTime
        ];

        let bottom = [
            response.data.readingEase,
            response.data.gradeLevel,
            response.data.dominantSentiment
        ];

        for (let i = 0; i < state.inputData.contentTool.widgets.top.length; i++) {
            state.inputData.contentTool.widgets.top[i].subTitle = top[i];
        }

        for (let i = 0; i < state.inputData.contentTool.widgets.bottom.length; i++) {
            state.inputData.contentTool.widgets.bottom[i].subTitle = bottom[i];
        }
        
    }
}