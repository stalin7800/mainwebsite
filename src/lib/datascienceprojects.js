// export const info = [
//     'machine learning': {

//         name: "Data Overview",
//         img: "url",
//         description: `
//         Our dataset is a collection of samples of different wines, and the rating given to them by a professional wine taster in a range from zero to ten. The predictor variables given to us in our dataset were: Fixed Acidity, Volatile Acidity, Citric  Acid, Residual Sugar, Free Sugar Dioxide, Chlorides, Total Sulfur Dioxide, Density, pH, Sulphates, Alcohol


//         `
//     }


// ]

export const info = 
    [
        {
           title: 'Machine Learning',
           gendesc: "A basic machine learning projectI created in my data science 2010 class. This project provided an overview of machine learning, and the differences between various machine learning models",
           tabs:
            [
            {
            name: "Data Overview",
            img: "url",
            description: `
            Our dataset is a collection of samples of different wines, and the rating given to them by a professional wine taster in a range from zero to ten. The predictor variables given to us in our dataset were: Fixed Acidity, Volatile Acidity, Citric  Acid, Residual Sugar, Free Sugar Dioxide, Chlorides, Total Sulfur Dioxide, Density, pH, Sulphates, Alcohol`
            },
            {
                name: "Unfiltered Linear Model",
                img: "url2",
                data: {
                    coefficients: [

                    {
                        intercept: {
                            value: 1.421e01, 
                            pval: 0.5422
                        } 
                    },

                    {
                        "fixed acidity": {
                            value: 3.356e-02,
                            pval: 0.23
                        }
                    },
                    {
                        "volatile acidity": {
                            value: -1.207e0,
                            pval: 2e-16
                        },
                    },
                    {
                        "citric acid": {
                            value: 3.306e-1,
                            pval:0.041518
                        }
                    },
                    {
                        "residual sugar": {
                            value: 6.166e-03,
                            pval: 0.715
                        }
                    },
                    {
                        chlorides: {
                            value: -1.771,
                            pval: .000127
                        }
                    },
                    {
                        "free sulfur dioxide": {
                            value: 4.714e-03,
                            pval: 0.052831
                        }
                    },
                    {
                        "total sulfur dioxide": {
                            value: -3.252e-03,
                            pval: 5.07e-05,
                        }
                    },
                    {
                        density: {
                            value: -1.028e01,
                            pval: 0.665376
                        }
                    },
                    {
                        pH: {
                            value: -3.732e-01,
                            pval: .0774993
                        }
                    },
                    {
                        sulphates: {
                            value: 9.249e-01,
                            pval: 4.96e-13
                        }
                    },
                    {
                        alcohol: {
                            value: 2.833e-01,
                            pval: 2e-16
                        }
                    }

                    ],
                    rse: "0.6413, 1267 degrees of freedom"
                },

                description: `
                dfdsf
                
                `
            }
      
            ],
        }
    ]
