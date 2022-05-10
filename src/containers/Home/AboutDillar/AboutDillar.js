import React from 'react';
import Dillar from '../../img/AboutDillar/maneger.jpg'

const AboutDillar = () => {
    return (
        <div className='container mt-5 mb-5'>
            <div>
                <h1 className='text-center'>Company Provider</h1>
            </div>
            <div className='about-stock'>
                <div className=''>
                    <img src={Dillar} alt="" />
                </div>
                <div className=''>
                    <p>Perhaps the most salient thing you need to know about the artist Jeremy Deller is that he neither trained nor studied to be an artist. This is important, as it inducts Deller within a history of so-called “self-taught” artists: a canon of individuals who arrived at making art, or something that resembles art, via other means, via other routes. Eschewing art school, Deller instead studied art history, initially within the formal environs of London’s Courtauld Institute, where he specialized in the southern-European Baroque; and then later at the University of Sussex, where he studied with David Mellor (Mellor’s Wikipedia entry notably identifies only Deller as being a former student of his). At Sussex, Deller’s interests expanded to embrace a broader and more porous understanding of the role that both art and the artist might play within society. Informed and influenced by the prescient thinking of the pioneers of what came to be known as Cultural Studies – Raymond Williams, Richard Hoggart, Stuart Hall, et al – Deller’s subsequent work, over the next three decades both mirrors and amplifies their desire to understand culture “in all its complex forms”, whilst simultaneously analyzing “the social and political context in which culture manifests itself.</p>
                </div>
            </div>
        </div>
    );
};

export default AboutDillar;