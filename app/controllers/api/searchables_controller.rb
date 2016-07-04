class Api::SearchablesController < ApplicationController
  def search
    limit = 10
    query = params[:query].downcase
    regexp = '^' + query
    while true
      results = Searchable.select("user_id")
                          .where("fname ~* ?", regexp)
                          .limit(limit)
                          .map {|i| i.user_id}
      results.uniq!
      break if results.length >= 10
      results += Searchable.select("user_id")
                           .where("lname ~* ?", regexp)
                           .limit(limit - results.length)
                           .map {|i| i.user_id}
      results.uniq!
      break if results.length >= 10
      results += Searchable.select("user_id")
                           .where("lname ~* ?", query)
                           .limit(limit - results.length)
                           .map {|i| i.user_id}
      results.uniq!
      break
    end
    render json: results
  end
end
