require 'rails_helper'

describe 'sessions' do
  describe 'registration' do
    it 'works' do
      user_count = User.count

      post '/api/v1/auth', params: {
        email: 'test@gmail.com',
        password: 'password'
      }

      expect(User.count).to eq(user_count + 1)
    end
  end
end
