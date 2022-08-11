import Post from '../src/model/Post';
import User from '../src/model/User';

export const usersData: Array<User> = [
  new User(
    1,
    'Leonardo',
    '87 9816-4587',
    'leonardo@email.com',
    'leonardo.com.br'
  ),
  new User(2, 'Joan', '11 5487-9584', 'joan@email.com', 'joan.com.br'),
  new User(3, 'Michele', '14 8596-3254', 'michele@email.com', 'michele.com.br'),
];

export const postsData: Array<Post> = [
  new Post(1, 'My Fault', 'This is my fault!', 1),
  new Post(2, 'I have a dream', 'I Have a dream about you!', 2),
  new Post(3, 'This is not the only way', 'You have to consider that!', 3),
];
