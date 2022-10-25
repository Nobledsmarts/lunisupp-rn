export default async (previous, current, page, changeConversationData, conversationModel) => {
    try {

        const skip = 0;
        const limit = 10 * (page + 1);
        // dispatch(conversationRequest({
        //   country : 'ng',
        //   page : page
        // }))

        // console.log('current = ' + current);
        // console.log('page = ' + page);
        // console.log('previous = ' + previous);

            if (page === 0) {
                changeConversationData({...conversationModel, loading : true});
                // changeConversationData({...conversationModel, data : listPages[`page0`], loading : false});
                fetch(`https://dummyjson.com/comments?limit=${limit}&skip=${skip}`)
                .then(res => res.json())
                .then(({ comments }) => {
                    changeConversationData({...conversationModel,  data : comments , loading : false});
                });
                

                // console.log([...conversationModel.data, ...listPages[`page0`]]);
                // return { ...state, loading: true }
            } 
            // else if(page == 2) {
            //     changeConversationData({...conversationModel, moreLoading : true});
            //     const timeout = setTimeout(() => {
            //     changeConversationData({...conversationModel, data : [...conversationModel.data, ...listPages[`page1`]], moreLoading : false, isListEnd : true});

            //     clearTimeout(timeout);
            //     },0);
            //     // changeConversationData({...conversationModel, data : listPages[`page2`], moreLoading : false, isListEnd : true});

            // } 
            else  {
                // if(page == 1) {
                
                changeConversationData({...conversationModel, moreLoading : true});
                fetch(`https://dummyjson.com/comments?limit=${limit}&skip=${skip}`)
                .then(res => res.json())
                .then(({ comments }) => {
                    changeConversationData({...conversationModel,  data : comments , moreLoading : false});
                });
                // const timeout = setTimeout(() => {
                //     changeConversationData({...conversationModel, data : [...conversationModel.data, ...listPages[`page${page}`]], moreLoading : false});
                //     if((Object.keys(listPages).length) == page){
                //         changeConversationData({...conversationModel,  isListEnd : true});
                //     }

                // clearTimeout(timeout);
                // },0);

            // }
            // console.log('uncaught == ' + page)

                // changeConversationData({...conversationModel, data : listPages[`page1`], moreLoading : false});


                // return { ...state, moreLoading: true }
            }
                // const timeout = setTimeout(() => {
                // setListData(`page${page}`);
                // console.log(`page${page}`);
                
                // changeConversationData({...conversationModel, data : listPages[`page${page}`], moreLoading : false, loading : false });
                
                // console.log(page);
                // console.log(listPages[`page${page}`]);

                if(page == 2){
                    
                }
                // }, 10000)
                return () => {
                console.log('cleared');
                // changeConversationData({...conversationModel, moreLoading : false, loading : false});
                // clearTimeout(timeout)
                };
    } catch(err) {
        console.log(err);
    }
  }
