import { createBrowserRouter } from 'react-router-dom'
import { App } from '../App'
import { CheckCode, Dashboard, ForgotPassword, FormProfile, Home, Login, Profile, Register,ChangePassword, Blog,EditArticle } from '../pages'
import { Protected, ProtectedCheckChildren } from '../components'
import { CreateArticle } from '../pages/CreateArticle/CreateArticle'
import { MyArticles } from '../pages/MyArticles/MyArticles'
import { FavoritesPage } from '../pages/FavoritesPage/FavoritesPage'
import { ArticleDetail } from '../pages/ArticleDetail/ArticleDetail'


export const router = createBrowserRouter([
    {
        path:'/',
        element: <App />,
        children: [
            {
                path:'/',
                element:<Home />,
            },
            {
                path:'/register',
                element:<Register />,
            },
            {
                path:'/login',
                element:<Login />,
            },
            {
                path:'/profile',
                element:(
                    <Protected>
                        <Profile />
                    </Protected>
                ),
                children: [
                    {
                        path: '', 
                        element: (
                            <Protected>
                                <FormProfile />
                            </Protected>
                        ),
                    },
                    {
                        path: 'changePassword', 
                        element: (
                            <Protected>
                                <ChangePassword />
                            </Protected>
                        ),
                    },
                ],
            },
            {
                path:'/dashboard',
                element:(
                <Protected>
                    <Dashboard />
                </Protected>),
            },
            {
                path:'/forgotPassword',
                element:<ForgotPassword />,
            },
            {
                path:'/verifyCode',
                element:(
                    <ProtectedCheckChildren>
                        <CheckCode />
                    </ProtectedCheckChildren>
                ),
            },

            {
                path:'/createArticle',
                element:(
                    <Protected>
                        <CreateArticle />
                    </Protected>),
                },
            {
                path:'/myArticles',
                 element:(
                    <Protected>
                        <MyArticles />
                    </Protected>),
            },
            {
                path:'/favorites',
                element:(
                    <Protected>
                        <FavoritesPage />
                    </Protected>),
            },

            {
                path:'/editArticle/:id',
                element:(
                    <Protected>
                        <EditArticle />
                    </Protected>),
            },
            {
                path:'/blog',
                element:<Blog />,
            },
            {
                path:'/article/:id',
                element:<ArticleDetail/>
            }

        ]
    }
])