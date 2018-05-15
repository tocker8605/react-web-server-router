import asyncRoute from '../lib/AsyncRoute';

export const Home = asyncRoute(() => import('./Home'));
export const About = asyncRoute(() => import('./About'));
export const Post = asyncRoute(() => import('./Post'));
export const Posts = asyncRoute(() => import('./Posts'));
export const Users = asyncRoute(() => import('./Users'));
